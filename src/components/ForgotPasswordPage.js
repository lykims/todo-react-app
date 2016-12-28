import React from 'react';
import DocumentTitle from 'react-document-title';
import { ResetPasswordForm } from 'react-stormpath';

export default class ForgotPasswordPage extends React.Component {
    render() {
        return (
            <DocumentTitle title={'Reset Password'}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12">
                            <h3>Reset Password</h3>
                            <hr />
                        </div>
                    </div>
                    <ResetPasswordForm />
                </div>
            </DocumentTitle>
        );
    }
}
