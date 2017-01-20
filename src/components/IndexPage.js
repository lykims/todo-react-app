import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { LoginLink } from 'react-stormpath';
import { Card, CardTitle } from 'material-ui/Card';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="splash">
                <Card className="container">
                    <CardTitle title="Get Things Done" subtitle="To Do List Management" className="card-title"/>
                </Card>
            </div>
        );
    }
}
