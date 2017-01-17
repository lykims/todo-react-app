import React from 'react';
import superagent from 'superagent';

import InlineEdit from './InlineEdit';

export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    checkCompleted(e) {
        e.preventDefault();
        var todo = {
            _id: this.props._id,
            text: this.props.text,
            completed: !this.props.completed,
            order: this.props.order
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
        var todo = this.props;
        return (
            <div>
                <input type="checkbox" checked={todo.completed} onChange={this.checkCompleted.bind(this)}/>
                <InlineEdit todo={todo} editing={false} updateItems={this.props.updateItems}/>
                <a onClick={this.removeItem.bind(this)}>
                    <span className="glyphicon glyphicon-trash"></span>
                </a>
            </div>
        );
    }
}
