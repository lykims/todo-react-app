var path = require('path');
var db = require('./models/index.js');

function getTodos(res) {
    db.todo.findAll({order: [['order', 'ASC']]})
    .then(todos => {
        res.json(todos);
    })
    .catch(err => {
        res.send(err);
    });
};

module.exports = function (app) {

    app.get('/api/todos', (req, res, next) => {
        getTodos(res);
    });

    app.post('/api/todos', (req, res, next) => {
        const todo = {
            text: req.body.text,
            completed: false,
            order: req.body.order
        };
        db.todo.findOrCreate({ where: todo })
        .then(([todoObj, created]) => {
            getTodos(res);
        })
        .catch(err => {
            res.send(err);
        });
    });

    app.put('/api/todos', (req, res, next) => {
        const todo = {
            text: req.body.text,
            completed: req.body.completed,
            order: req.body.order
        };
        db.todo.update(
          todo,
          { where: { id: req.body.id } }
        )
        .then(result => {
            getTodos(res);
        })
        .catch(err => {
            res.send(err);
        });
    });

    app.delete('/api/todos/:todoid', (req, res, next) => {
        db.todo.destroy(
          { where: { id: req.params.todoid } }
        )
        .then(result => {
            getTodos(res);
        })
        .catch(err => {
            res.send(err);
        });
    });

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, 'index.html'));
    });

};
