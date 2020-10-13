import { MasterPage, AboutPage, ToDoPage } from './components';
import React from 'react';
import ReactDOM from 'react-dom';
import { IndexRoute, Route, Router, browserHistory } from 'react-router';

import styles from './assets/stylesheets/main.less';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={MasterPage}>
            <IndexRoute component={ToDoPage} />
            <Route path='/about' component={AboutPage} />
        </Route>
    </Router>,
    document.getElementById('app-container')
);
