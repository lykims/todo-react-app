import React from 'react';
import DocumentTitle from 'react-document-title';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TrendingUpIcon from 'material-ui/svg-icons/action/trending-up';

const iconStyles = {
  width: 50,
  height: 50
};

export default class AboutPage extends React.Component {
    render() {
        return (
            <DocumentTitle title={'About'}>
                <div className="about">
                    <Card className="container">
                        <CardTitle title="About" className="card-title"/>
                        <CardText>
                            <TrendingUpIcon style={iconStyles}/>
                            <p>
                                I heard about React a lot these days and decided to create a project that helps me in exploring this JavaScript library in trend in web development. Find code source on <a href="https://github.com/lykims/todo-react-app">GitHub</a>.
                            </p>
                        </CardText>
                    </Card>
                </div>
            </DocumentTitle>
        );
    }
}
