import React from 'react';
import superagent from 'superagent';
import {SortableHandle} from 'react-sortable-hoc';
import {TableRow, TableRowColumn} from 'material-ui/Table';
import Checkbox from 'material-ui/Checkbox';
import IconButton from 'material-ui/IconButton';
import DragHandleIcon from 'material-ui/svg-icons/editor/drag-handle';
import CloseIcon from 'material-ui/svg-icons/navigation/close';

import InlineEdit from './InlineEdit';

const DragHandle = SortableHandle(() =>
    <div>
        <IconButton><DragHandleIcon color={"#CCCCCC"}/></IconButton>
    </div>
);

export default class ToDoItem extends React.Component {
    constructor(props) {
        super(props);
        this.checkCompleted = this.checkCompleted.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }
    checkCompleted(e) {
        e.preventDefault();
        var todo = {
            _id: this.props._id,
            text: this.props.text,
            completed: !this.props.completed,
            order: this.props.order
        };
        superagent.put('/api/todos')
            .send(todo)
            .end((err, res) => {
                if (err) {
                    return console.error(err);
                }
                this.props.updateItems(res.body);
            });
    }
    removeItem(e) {
        e.preventDefault();
        superagent.del(`/api/todos/${this.props._id}`)
            .end((err, res) => {
                if (err) {
                    console.error(err);
                }
                this.props.updateItems(res.body);
            });
    }
    render() {
        var todo = this.props;
        return (
            <TableRow>
                {this.props.showDragHandle &&
                    <TableRowColumn className="icon-cell">
                        <DragHandle />
                    </TableRowColumn>
                }
                <TableRowColumn className="icon-cell">
                    <Checkbox checked={todo.completed} onCheck={this.checkCompleted}/>
                </TableRowColumn>
                <TableRowColumn>
                    <InlineEdit todo={todo} editing={false} updateItems={this.props.updateItems}/>
                </TableRowColumn>
                <TableRowColumn className="icon-cell">
                    <a onClick={this.removeItem}>
                        <IconButton><CloseIcon color={"#CCCCCC"}/></IconButton>
                    </a>
                </TableRowColumn>
            </TableRow>
        );
    }
}
