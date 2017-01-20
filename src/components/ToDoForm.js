import React from 'react';
import superagent from 'superagent';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
    }
    addItem(e) {
		e.preventDefault();
        var task = this.refs.item.input.value.trim();
        var todo = {
            text: task,
            order: this.props.listCount > 0 ? this.props.listCount : 0
        };
        if(task) {
            superagent.post('/api/todos')
                .send(todo)
                .end((err, res) => {
                    if (err) return console.error(err);
                    this.refs.item.input.value = '';
                    this.props.onFormSubmit(res.body);
                });
        }
		return;
	}
	render(){
		return (
			<form onSubmit={this.addItem.bind(this)} className="todo-form">
                <TextField type="text" ref="item" name="task" className="todo-input" hintText="What needs to be done?" />
			</form>
		);
	}
}
