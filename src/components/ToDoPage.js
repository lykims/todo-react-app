import React from 'react';
import DocumentTitle from 'react-document-title';

import ToDoForm from './ToDoForm';
import ToDoFilters from './ToDoFilters';
import ToDoList from './ToDoList';

export default class ToDoPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: ['Item #1']
        };
    }
    updateItems(newItem) {
		var allItems = this.state.items.concat([newItem]);
        this.setState({items: allItems});
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
                            <ToDoList items={this.state.items}/>
                        </div>
                    </div>
                </div>
            </DocumentTitle>
        );
    };
}
