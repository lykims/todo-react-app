import React from 'react';
import DocumentTitle from 'react-document-title';
import superagent from 'superagent';
import { Card, CardTitle } from 'material-ui/Card';

import ToDoForm from './ToDoForm';
import ToDoFilters from './ToDoFilters';
import ToDoList from './ToDoList';

const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_PENDING: 'SHOW_PENDING',
    SHOW_COMPLETED: 'SHOW_COMPLETED'
};

const ToDoStatusFilters = {
    [VisibilityFilters.SHOW_ALL]: () => true,
    [VisibilityFilters.SHOW_PENDING]: todo => !todo.completed,
    [VisibilityFilters.SHOW_COMPLETED]: todo => todo.completed
};

export default class ToDoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            filter: VisibilityFilters.SHOW_ALL
        };
    }
    componentDidMount() {
        superagent.get('/api/todos')
            .end((err, res) => {
                if (err) {
                    return console.error(err);
                }
                if(res.body) {
                    this.setState({
                        items: res.body
                    });
                }
            });
    }
    updateItems(items) {
		this.setState( { items } );
	}
    setFilter(filter) {
        this.setState({ filter });
    }
    render() {
        return (
            <DocumentTitle title={'To Do'}>
                <Card className="container todo-container">
                    <CardTitle title="To Do" className="card-title"/>
                    <div>
                            <ToDoForm
                                listCount={this.state.items.length}
                                onFormSubmit={this.updateItems.bind(this)}/>
                            <ToDoFilters
                                visibilityFilters={VisibilityFilters}
                                toDoStatusFilters={ToDoStatusFilters}
                                setFilter={this.setFilter.bind(this)}
                                items={this.state.items}/>
                            <ToDoList
                                {...this.state}
                                updateItems={this.updateItems.bind(this)}
                                toDoStatusFilters={ToDoStatusFilters}/>
                    </div>
                </Card>
            </DocumentTitle>
        );
    };
}
