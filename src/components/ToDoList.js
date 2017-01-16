import React from 'react';

import ToDoItem from './ToDoItem';

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const toDoList = this.props.items.filter(this.props.toDoStatusFilters[this.props.filter]);
        return (
            <div>
                <ul>
                    {
                        toDoList.map((todo, index) =>
                            <ToDoItem
                                key={index}
                                {...todo}
                                updateItems={this.props.updateItems.bind(this)} />)
                    }
                </ul>
            </div>
        );
    }
}
