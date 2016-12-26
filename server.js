var bodyParser = require('body-parser');
var path = require('path');
var webpack = require('webpack');
var config = require('./webpack.config');
var express = require('express');
var stormpath = require('express-stormpath');

var app = express();

var compiler = webpack(config);

// Pack all JavaScript files into one bundle
app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

// Stormpath Configurations
app.use(stormpath.init(app, {
    web: {
        produces: ['application/json'],
        debug: 'info',
        login: {
            form: {
                fields: {
                    login: {
                        label: 'Email',
                        placeholder: 'Email'
                    }
                }
            }
        }
    }
}));

// Stormpath - Allow the form to change the first name, last name, email and password
app.post('/me', bodyParser.json(), stormpath.loginRequired, function (req, res) {
    function writeError(message) {
        res.status(400);
        res.json({ message: message, status: 400 });
        res.end();
    }

    function saveAccount () {
        req.user.givenName = req.body.givenName;
        req.user.surname = req.body.surname;
        req.user.email = req.body.email;

        req.user.save(function (err) {
            if (err) {
                return writeError(err.userMessage || err.message);
            }
            res.end();
        });
    }

    if (req.body.password) {
        var application = req.app.get('stormpathApplication');

        application.authenticateAccount({
            username: req.user.username,
            password: req.body.existingPassword
        }, function (err) {
            if (err) {
                return writeError('The existing password that you entered was incorrect.');
            }

            req.user.password = req.body.password;

            saveAccount();
        });
    }
    else {
        saveAccount();
    }
});

app.use('/js', express.static(__dirname + '/node_modules/jquery/dist'));
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js'));
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.on('stormpath.ready', function () {
    app.listen(process.env.PORT || 3000, function() {
        console.log('\n\n=====> APP IS READY!');
    });
});
