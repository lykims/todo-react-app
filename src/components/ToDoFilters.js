import React from 'react';

export default class ToDoFilters extends React.Component {
    getCountByFilter(filter, items) {
        if(filter && items) {
            return items.filter(this.props.toDoStatusFilters[filter]).length;
        }
        return 0;
    }
    render() {
        const VisibilityFilters = this.props.visibilityFilters;
        const FilterTitle = {
            [VisibilityFilters.SHOW_ALL]: 'All',
            [VisibilityFilters.SHOW_PENDING]: 'Pending',
            [VisibilityFilters.SHOW_COMPLETED]: 'Completed',
        };
        const filters = Object.keys(VisibilityFilters).map(key => VisibilityFilters[key]);
        const items = this.props.items;
        return (
            <ul>
                {filters.map(filter =>
                    <li key={filter}>
                        <button type="button" className="btn btn-default"
                            onClick={() => this.props.setFilter(filter)}>
                            {FilterTitle[filter]} ({this.getCountByFilter(filter, items)})
                        </button>
                    </li>
                )}
            </ul>
        );
    }
}
