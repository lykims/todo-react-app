import React from 'react';

import ToDoItem from './ToDoItem';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }
    createItem(itemText) {
        return (
            <ToDoItem>{itemText}</ToDoItem>
        );
    }
    render() {
        return (
            <ul>{this.props.items.map(this.createItem)}</ul>
        );
    }
}
