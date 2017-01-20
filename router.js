var Todo = require('./models/todo');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var stormpath = require('express-stormpath');


function getTodos(res, username) {
    Todo.find({ username: username }, function (err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    }).sort([['order', 1]]);
};

module.exports = function (app) {

    app.get('/api/todos', stormpath.getUser, (req, res, next) => {
        getTodos(res, req.user.username);
    });

    app.post('/api/todos', stormpath.getUser, (req, res, next) => {
        Todo.create({
            username: req.user.username,
            text: req.body.text,
            completed: false,
            order: req.body.order
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            getTodos(res, req.user.username);
        });
    });

    app.put('/api/todos', stormpath.getUser, (req, res, next) => {
        const ObjectId = mongoose.Types.ObjectId;
        Todo.findOneAndUpdate({
            _id: new ObjectId(req.body._id),
            username: req.user.username
        }, {
            text: req.body.text,
            completed: req.body.completed,
            order: req.body.order
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            getTodos(res, req.user.username);
        });
    });

    app.delete('/api/todos/:todoid', stormpath.getUser, (req, res, next) => {
        const ObjectId = mongoose.Types.ObjectId;
        Todo.remove({
            _id: new ObjectId(req.params.todoid),
            username: req.user.username
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            getTodos(res, req.user.username);
        });
    });

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

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

};
