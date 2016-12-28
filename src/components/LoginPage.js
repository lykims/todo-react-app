import React from 'react';
import DocumentTitle from 'react-document-title';
import { LoginForm } from 'react-stormpath';

export default class LoginPage extends React.Component {
    render() {
        return (
            <DocumentTitle title={'Login'}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Login</h3>
                            <hr />
                        </div>
                    </div>
                    <LoginForm>
                        <div className="login-form">
                            <div className="row">
                                <div className="col-xs-12 col-sm-4 col-sm-offset-4">
                                    <div className="form-group form-line">
                                        <input type="text" className="form-control" name="username" placeholder="Email" />
                                        <label htmlFor="username" className="control-label">Email</label>
                                    </div>
                                    <div className="form-group form-line">
                                        <input type="password" className="form-control" name="password" placeholder="Password" />
                                        <label htmlFor="password" className="control-label">Password</label>
                                    </div>
                                    <div className="form-group">
                                        <a href="/forgot">Forgot Password?</a>
                                    </div>
                                    <div className="form-group">
                                        <p className="alert alert-danger" spIf="form.error"><span spBind="form.errorMessage" /></p>
                                        <button type="submit" className="btn btn-primary">Login</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </LoginForm>
                </div>
            </DocumentTitle>
        );
    }
}
