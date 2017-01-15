import React from 'react';

import ToDoItem from './ToDoItem';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <ul>
                {this.props.items.map((todo, index) => <ToDoItem key={index} updateItems={this.props.updateItems.bind(this)} {...todo} />)}
            </ul>
        );
    }
}
