var path = require('path');
var webpack = require('webpack');

// Pack all JavaScript files into one bundle
module.exports = {
    entry: [
        './src/app'
    ],
    devtool: 'eval-source-map',
    output: {
        path: __dirname,
        filename: 'app.js',
        publicPath: '/js/'
    },
    module: {
        loaders: [{
            // ES6 to write real JavasScript classes.
            // JSX to write HTML in JavaScript without concatenating strings.
            // Transpile ES6 and JSX into ES5 for backwards compatibility with old browsers.
            // Babel does the conversion.
            test: /\.js$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.less$/,
            loaders: ['style', 'css', 'less'],
            include: path.join(__dirname, 'src')
        }, {
            test: /\.(woff|woff2|eot|ttf|svg|jpe?g|gif|png)$/,
            loader: 'file-loader'
        }]
    }
};
