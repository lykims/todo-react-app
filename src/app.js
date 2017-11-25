import { MasterPage, IndexPage, AboutPage, LoginPage, RegistrationPage, ProfilePage, ForgotPasswordPage, ToDoPage } from './components';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import styles from './assets/stylesheets/main.less';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={MasterPage}>
            <IndexRoute component={IndexPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/login' component={LoginPage} />
            <Route path='/forgot' component={ForgotPasswordPage} />
            <Route path='/register' component={RegistrationPage} />
            <Route path='/todo' component={ToDoPage} />
            <Route path='/profile' component={ProfilePage} />
        </Route>
    </Router>,
    document.getElementById('app-container')
);
