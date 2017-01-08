import React from 'react';

export default class ToDoFilters extends React.Component {
    render() {
        return (
            <ul>
                <li>All</li>
                <li>Pending</li>
                <li>Completed</li>
            </ul>
        );
    }
}
