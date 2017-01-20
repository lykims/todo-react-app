import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';

export default class ToDoFilters extends React.Component {
    getCountByFilter(filter, items) {
        if(filter && items) {
            return items.filter(this.props.toDoStatusFilters[filter]).length;
        }
        return 0;
    }
    getLabel(filter, items) {
        const VisibilityFilters = this.props.visibilityFilters;
        const FilterTitle = {
            [VisibilityFilters.SHOW_ALL]: 'All',
            [VisibilityFilters.SHOW_PENDING]: 'Pending',
            [VisibilityFilters.SHOW_COMPLETED]: 'Completed',
        };
        return FilterTitle[filter] + ' (' + this.getCountByFilter(filter, items) + ')';
    }
    render() {
        const VisibilityFilters = this.props.visibilityFilters;
        const filters = Object.keys(VisibilityFilters).map(key => VisibilityFilters[key]);
        var items = this.props.items;
        return (
            <Tabs>
                {filters.map(filter =>
                    <Tab key={filter}
                        label={this.getLabel(filter, items)}
                        onActive={() => this.props.setFilter(filter)}/>
                )}
            </Tabs>
        );
    }
}
