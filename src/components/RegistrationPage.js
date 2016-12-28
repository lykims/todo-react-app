import React from 'react';
import DocumentTitle from 'react-document-title';
import { RegistrationForm } from 'react-stormpath';

export default class RegistrationPage extends React.Component {
    render() {
        return (
            <DocumentTitle title={'Registration'}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Registration</h3>
                            <hr />
                        </div>
                    </div>
                    <RegistrationForm>
                        <div className="login-form">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 col-sm-offset-4">
                                    <div className="form-group form-line">
                                        <input type="text" className="form-control" name="givenName" placeholder="First Name" />
                                        <label htmlFor="givenName" className="control-label">First Name</label>
                                    </div>
                                    <div className="form-group form-line">
                                        <input type="text" className="form-control" name="surname" placeholder="Last Name" />
                                        <label htmlFor="surname" className="control-label">Last Name</label>
                                    </div>
                                    <div className="form-group form-line">
                                        <input type="email" className="form-control" name="email" placeholder="Email" />
                                        <label htmlFor="email" className="control-label">Email</label>
                                    </div>
                                    <div className="form-group form-line">
                                        <input type="password" className="form-control" name="password" placeholder="Password" />
                                        <label htmlFor="password" className="control-label">Password</label>
                                    </div>
                                    <div className="form-group">
                                        <p className="alert alert-danger" spIf="form.error"><span spBind="form.errorMessage" /></p>
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </RegistrationForm>
                </div>
            </DocumentTitle>
        );
    }
}
