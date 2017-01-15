import React from 'react';
import DocumentTitle from 'react-document-title';
import superagent from 'superagent';

import ToDoForm from './ToDoForm';
import ToDoFilters from './ToDoFilters';
import ToDoList from './ToDoList';

export default class ToDoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentDidMount() {
        superagent.get('/api/todos')
            .end((err, res) => {
                if (err) {
                    return console.error(err);
                }
                this.setState({
                    items: res.body
                });
            });
    }
    updateItems(items) {
		this.setState( { items } );
	}
    render() {
        return (
            <DocumentTitle title={'To Do'}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>To Do</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-sm-offset-4">
                            <ToDoForm onFormSubmit={this.updateItems.bind(this)}/>
                            <ToDoFilters/>
                            <ToDoList items={this.state.items} updateItems={this.updateItems.bind(this)}/>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    };
}
