import React from 'react';
import {SortableContainer, SortableElement, SortableHandle, arrayMove} from 'react-sortable-hoc';
import superagent from 'superagent';

import ToDoItem from './ToDoItem';

const DragHandle = SortableHandle(() => <span>::</span>);

const SortableItem = SortableElement((attr, {value}) => {
    if(attr.showDragHandle) {
        return (
            <li>
                <DragHandle />
                <ToDoItem {...attr.todo} updateItems={attr.updateItems} />
            </li>
        )
    }
    else {
        return (
            <li>
                <ToDoItem {...attr.todo} updateItems={attr.updateItems} />
            </li>
        )
    }

});

const SortableList = SortableContainer((attr, {items}) => {
	return (
		<ul>
			{attr.todo.map((todo, index) =>
                <SortableItem key={`item-${index}`} index={index} value={todo} todo={todo} showDragHandle={attr.showDragHandle} updateItems={attr.updateItems} />
            )}
		</ul>
	);
});

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);
    }
    onSortEnd({oldIndex, newIndex}) {
        this.props.items[oldIndex].order = newIndex;
        this.props.items[newIndex].order = oldIndex;
        superagent.put('/api/todos')
            .send(this.props.items[oldIndex])
            .end((err, res) => {
                if (err) {
                    return console.error(err);
                }
                superagent.put('/api/todos')
                    .send(this.props.items[newIndex])
                    .end((err, res) => {
                        if (err) {
                            return console.error(err);
                        }
                        this.props.updateItems(res.body);
                    });
            });
    };
    render() {
        var items = this.props.items.filter(this.props.toDoStatusFilters[this.props.filter]);
        var showAll = this.props.filter === 'SHOW_ALL';
        return (
            <SortableList todo={items} onSortEnd={this.onSortEnd.bind(this)} useDragHandle={showAll} showDragHandle={showAll} updateItems={this.props.updateItems.bind(this)} />
        )
    }
}
