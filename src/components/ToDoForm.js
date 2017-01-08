import React from 'react';

export default class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
    }
    addItem(e) {
		e.preventDefault();
        var item = this.refs.item.value.trim();
        if(item) {
            this.props.onFormSubmit(item);
        }
        this.refs.item.value = '';
		return;
	}
	render(){
		return (
			<form onSubmit={this.addItem.bind(this)} className='form-inline'>
				<input type='text' ref='item' className='form-control'/>
				<input type='submit' value='Add' className='btn btn-primary'/>
			</form>
		);
	}
}
