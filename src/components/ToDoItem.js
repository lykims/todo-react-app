import React from 'react';
import superagent from 'superagent';

export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    checkCompleted(e) {
        e.preventDefault();
        var todo = {
            _id: this.props._id,
            completed: !this.props.completed
        };
        superagent.put('/api/todos')
            .send(todo)
            .end((err, res) => {
                if (err) {
                    return console.error(err);
                }
                this.props.updateItems(res.body);
            });
    }
    removeItem(e) {
        e.preventDefault();
        superagent.del(`/api/todos/${this.props._id}`)
            .end((err, res) => {
                if (err) {
                    console.error(err);
                }
                this.props.updateItems(res.body);
            });
    }
    render() {
        var { _id, text, completed } = this.props;
        return (
            <li>
                <input type="checkbox" checked={completed} onChange={this.checkCompleted.bind(this)}/>
                {text}
                <a onClick={this.removeItem.bind(this)}>
                    <span className="glyphicon glyphicon-trash"></span>
                </a>
            </li>
        );
    }
}
