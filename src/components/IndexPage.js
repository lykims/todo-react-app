import { Link } from 'react-router';
import React, { PropTypes } from 'react';
import { Card, CardTitle } from 'material-ui/Card';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="welcome">
                <Card className="container">
                    <CardTitle title="Get Things Done" className="card-title"/>
                </Card>
            </div>
        );
    }
}
