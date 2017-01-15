// Imports =====================================================================
var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var stormpath = require('express-stormpath');
var stormpathConfig = require('./config/stormpath.config');

var lessMiddleware = require('less-middleware');
var lessMiddlewareConfig = require('./config/less.config');

var mongoose = require('mongoose');
var mongoLabConfig = require('./config/mongolab.json');


// Configurations ==============================================================
var app = express();
var compiler = webpack(webpackConfig);

app.use(morgan('dev')); // Log requests to console
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(lessMiddleware(
    path.join(__dirname, 'src', 'assets', 'stylesheets'),
    lessMiddlewareConfig)
);
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/fonts', express.static(path.join(__dirname, '/node_modules/bootstrap/fonts')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(stormpath.init(app, stormpathConfig));


// Routes ======================================================================
require('./router')(app);


// Start app  ==================================================================
app.on('stormpath.ready', function () {
    mongoose.connect(process.env.MONGODB_URI || mongoLabConfig.uri);
    app.listen(process.env.PORT || 3000, function() {
        console.log('\n\n=====> APP IS READY!');
    });
});
