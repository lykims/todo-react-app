import React from 'react';
import superagent from 'superagent';

export default class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
    }
    addItem(e) {
		e.preventDefault();
        var task = this.refs.item.value.trim();
        var todo = {
            text: task,
            order: this.props.listCount > 0 ? this.props.listCount : 0
        };
        if(task) {
            superagent.post('/api/todos')
                .send(todo)
                .end((err, res) => {
                    if (err) return console.error(err);
                    this.refs.item.value = '';
                    this.props.onFormSubmit(res.body);
                });
        }
		return;
	}
	render(){
		return (
			<form onSubmit={this.addItem.bind(this)} className='form-inline'>
				<input type='text' ref='item' name='task' className='form-control'/>
				<input type='submit' value='Add' className='btn btn-primary'/>
			</form>
		);
	}
}
