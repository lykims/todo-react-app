import React from 'react';
import DocumentTitle from 'react-document-title';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ForgotPasswordPage extends React.Component {
    render() {
        return (
            <DocumentTitle title={'Reset Password'}>
                <Card className="container form-container">
                    <CardTitle title="Reset Password" className="card-tile"/>
                    <div>
                        <div data-spIf="form.sent">
                            <p>
                                We have sent a password reset link to the email address of the account that you specified.<br />
                                Please check your email for this message, then click on the link.<br /><br />
                                <LoginLink>Back to Login</LoginLink>
                            </p>
                        </div>
                        <div data-spIf="!form.sent">
                            <div className="form-line">
                                <TextField
                                    name="email"
                                    hintText="Email"
                                    floatingLabelText="Email"
                                    floatingLabelFixed={true} />
                            </div>
                            <div>
                                <p className="error-message" data-spIf="form.error"><span data-spBind="form.errorMessage" /></p>
                            </div>
                            <div className="form-line submit-btn">
                                <RaisedButton label="Request Password Reset" primary={true} type="submit"/>
                            </div>
                        </div>
                    </div>
                </Card>
            </DocumentTitle>
        );
    }
}
