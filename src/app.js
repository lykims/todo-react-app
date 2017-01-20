import { MasterPage, IndexPage, LoginPage, RegistrationPage, ProfilePage, ForgotPasswordPage, ToDoPage } from './components';
import ReactStormpath, { Router, HomeRoute, LoginRoute, AuthenticatedRoute } from 'react-stormpath';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, browserHistory } from 'react-router';

import styles from './assets/stylesheets/main.less';

ReactStormpath.init();

ReactDOM.render(
    <Router history={browserHistory}>
        <HomeRoute path='/' component={MasterPage}>
            <IndexRoute component={IndexPage} />
            <LoginRoute path='/login' component={LoginPage} />
            <Route path='/forgot' component={ForgotPasswordPage} />
            <Route path='/register' component={RegistrationPage} />
            <AuthenticatedRoute>
                <HomeRoute path='/todo' component={ToDoPage} />
                <Route path='/profile' component={ProfilePage} />
            </AuthenticatedRoute>
        </HomeRoute>
    </Router>,
    document.getElementById('app-container')
);
