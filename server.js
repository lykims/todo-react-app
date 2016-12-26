var webpack = require('webpack');
var config = require('./webpack.config');
var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

app.use(stormpath.init(app, {
    web: {
        produces: ['application/json']
    }
}));

app.on('stormpath.ready', function () {
    app.listen(process.env.PORT || 3000);
});
