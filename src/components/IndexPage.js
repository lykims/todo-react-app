import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { LoginLink } from 'react-stormpath';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="splash">
                <div className="container">
                    <div className="jumbotron">
                        <h1 className="text-center">Get Things Done</h1>
                        <h3 className="text-center">To Do List Management</h3>
                    </div>
                </div>
            </div>
        );
    }
}
