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
        var startIndex = 0, endIndex = 0, operation = 0;
        if(oldIndex > newIndex) {
            startIndex = newIndex;
            endIndex = oldIndex;
            operation = 1;
        }
        else if(oldIndex < newIndex) {
            startIndex = oldIndex + 1;
            endIndex = newIndex + 1;
            operation = -1;
        }
        for(var i = startIndex; i < endIndex; i++) {
            this.props.items[i].order = i + operation;
        }
        this.props.updateItems(arrayMove(this.props.items, oldIndex, newIndex));

        superagent.put('/api/todos')
            .send(this.props.items[oldIndex])
            .end((err, res) => {
                if (err) {
                    return console.error(err);
                }
                for(var i = startIndex; i < endIndex; i++) {
                    superagent.put('/api/todos')
                        .send(this.props.items[i])
                        .end((err, res) => {
                            if (err) {
                                return console.error(err);
                            }
                        });
                }
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
