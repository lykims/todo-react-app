import React from 'react';

export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <li>{this.props.children}</li>
        );
    }
}
