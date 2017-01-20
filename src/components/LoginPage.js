import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class LoginPage extends React.Component {
    render() {
        return (
            <DocumentTitle title={'Login'}>
                <Card className="container form-container">
                    <CardTitle title="Log In" className="card-title"/>
                    <LoginForm>
                        <div className="form-line">
                            <TextField name="username" hintText="Email" floatingLabelText="Email" type="email"/>
                        </div>
                        <div className="form-line">
                            <TextField name="password" hintText="Password" floatingLabelText="Password" type="password"/>
                        </div>
                        <div className="form-line link-line">
                            <a href="/forgot">Forgot Password?</a>
                        </div>
                        <div>
                            <p className="error-message" data-spIf="form.error"><span data-spBind="form.errorMessage" /></p>
                        </div>
                        <div className="form-line submit-btn">
                            <RaisedButton label="Login" primary={true} type="submit"/>
                        </div>
                    </LoginForm>
                </Card>
            </DocumentTitle>
        );
    }
}
