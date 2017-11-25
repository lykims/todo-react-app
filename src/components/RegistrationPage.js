import React from 'react';
import DocumentTitle from 'react-document-title';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class RegistrationPage extends React.Component {
    render() {
        return (
            <DocumentTitle title={'Registration'}>
                <Card className="container form-container">
                    <CardTitle title="Sign Up" className="card-title"/>
                    <div>
                        <div className="form-line">
                            <TextField name="givenName"
                                hintText="First Name"
                                floatingLabelText="First Name"
                                floatingLabelFixed={true} />
                        </div>
                        <div className="form-line">
                            <TextField name="surname"
                                hintText="Last Name"
                                floatingLabelText="Last Name"
                                floatingLabelFixed={true} />
                        </div>
                        <div className="form-line">
                            <TextField name="email"
                                hintText="Email"
                                floatingLabelText="Email"
                                floatingLabelFixed={true}
                                type="email" />
                        </div>
                        <div className="form-line">
                            <TextField name="password"
                                hintText="Password"
                                floatingLabelText="Password"
                                floatingLabelFixed={true}
                                type="password" />
                        </div>
                        <div>
                            <p className="error-message" data-spIf="form.error"><span data-spBind="form.errorMessage" /></p>
                        </div>
                        <div className="form-line submit-btn">
                            <RaisedButton label="Register" primary={true} type="submit"/>
                        </div>
                    </div>
                </Card>
            </DocumentTitle>
        );
    }
}
