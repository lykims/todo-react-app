import React from 'react';
import DocumentTitle from 'react-document-title';
import { UserProfileForm } from 'react-stormpath';
import { Card, CardTitle } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class ProfilePage extends React.Component {
    render() {
        return (
            <DocumentTitle title={'My Profile'}>
                <Card className="container form-container">
                    <CardTitle title="My Profile" className="card-title"/>
                    <UserProfileForm>
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
                            <TextField name="existingPassword"
                                hintText="Old Password"
                                floatingLabelText="Old Password"
                                floatingLabelFixed={true}
                                type="password" />
                        </div>
                        <div className="form-line">
                            <TextField name="password"
                                hintText="New Password"
                                floatingLabelText="New Password"
                                floatingLabelFixed={true}
                                type="password" />
                        </div>
                        <div>
                            <p className="error-message" data-spIf="form.error"><span data-spBind="form.errorMessage" /></p>
                        </div>
                        <div className="success-message" data-spIf="form.successful">
                            Profile updated.
                        </div>
                        <div className="form-line submit-btn">
                            <RaisedButton label="Update" primary={true} type="submit"/>
                        </div>
                    </UserProfileForm>
                </Card>
            </DocumentTitle>
        );
    }
}
