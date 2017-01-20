import React from 'react';
import { Link } from 'react-router';
import { LoginLink } from 'react-stormpath';
import DocumentTitle from 'react-document-title';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MainNav from './MainNav';

injectTapEventPlugin();

export default class is extends React.Component {
    render() {
        return (
            <DocumentTitle title='To Do'>
                <div className='MasterPage'>
                    <MuiThemeProvider>
                        <MainNav />
                    </MuiThemeProvider>
                    <MuiThemeProvider>
                        <div className='component-container'>
                            { this.props.children }
                        </div>
                    </MuiThemeProvider>
                </div>
            </DocumentTitle>
        );
    }
}
