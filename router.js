var Todo = require('./models/todo');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

function getTodos(res, username) {
    Todo.find({ username: username }, function (err, todos) {
        if (err) {
            res.send(err);
        }
        res.json(todos);
    }).sort([['order', 1]]);
};

module.exports = function (app) {

    app.get('/api/todos', (req, res, next) => {
        getTodos(res, "test_user");
    });

    app.post('/api/todos', (req, res, next) => {
        Todo.create({
            username: "test_user",
            text: req.body.text,
            completed: false,
            order: req.body.order
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            getTodos(res, "test_user");
        });
    });

    app.put('/api/todos', (req, res, next) => {
        const ObjectId = mongoose.Types.ObjectId;
        Todo.findOneAndUpdate({
            _id: new ObjectId(req.body._id),
            username: "test_user"
        }, {
            text: req.body.text,
            completed: req.body.completed,
            order: req.body.order
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            getTodos(res, "test_user");
        });
    });

    app.delete('/api/todos/:todoid', (req, res, next) => {
        const ObjectId = mongoose.Types.ObjectId;
        Todo.remove({
            _id: new ObjectId(req.params.todoid),
            username: "test_user"
        }, function (err, todo) {
            if (err) {
                res.send(err);
            }
            getTodos(res, "test_user");
        });
    });

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

};
