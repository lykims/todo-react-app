// Imports =====================================================================
var express = require('express');

var stormpath = require('express-stormpath');
var stormpathConfig = require('./config/stormpath.config');

var bodyParser = require('body-parser');
var path = require('path');

var webpack = require('webpack');
var webpackConfig = require('./webpack.config');

var morgan = require('morgan');

var mongoose = require('mongoose');
var mongoLabConfig = require('./config/mongolab.json');


// Configurations ==============================================================
var app = express();
var compiler = webpack(webpackConfig);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath
}));
app.use(stormpath.init(app, stormpathConfig));
app.use(morgan('dev')); // Log requests to console
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


// Routes ======================================================================
require('./router')(app);


// Start app  ==================================================================
app.on('stormpath.ready', function () {
    mongoose.connect(process.env.MONGODB_URI || mongoLabConfig.uri);
    app.listen(process.env.PORT || 3000, function() {
        console.log('\n\n=====> APP IS READY!');
    });
});
