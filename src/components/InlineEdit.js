import React from 'react';
import ReactDOM from 'react-dom';
import superagent from 'superagent';

export default class InlineEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: props.editing
        }
        this.setTextModeOnClick = this.setTextModeOnClick.bind(this);
    }
    componentDidMount() {
        document.addEventListener('click', this.setTextModeOnClick, true);
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.setTextModeOnClick, true);
    }
    setTextModeOnClick(e) {
        const domNode = ReactDOM.findDOMNode(this);
        if((!domNode || !domNode.contains(e.target))) {
            this.editItem(false)
        }
    }
    updateItem(e) {
        e.preventDefault();
        var task = this.refs.item.value.trim();
        var todo = {
            _id: this.props.todo._id,
            text: task,
            completed: this.props.todo.completed,
            order: this.props.todo.order
        };
        if(task && task !== this.props.todo.text) {
            superagent.put('/api/todos')
                .send(todo)
                .end((err, res) => {
                    if (err) {
                        return console.error(err);
                    }
                    this.setState({todo: todo});
                    this.props.updateItems(res.body);
                });
        }
        this.editItem(false);
    }
    editItem(enabled) {
        this.setState({editing: enabled});
    }
    render() {
        if(this.state.editing) {
            return(
                <form onSubmit={this.updateItem.bind(this)}>
                    <input type='text' ref='item' className='form-control' defaultValue={this.props.todo.text}/>
                </form>
            );
        } else {
            return(
                <div onDoubleClick={this.editItem.bind(this)}>
                    {this.props.todo.text}
                </div>
            );
        }
    }
}
