import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';
import MenuItem from 'material-ui/MenuItem';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <MenuItem><Link to="/">Home</Link></MenuItem>
                <NotAuthenticated>
                    <MenuItem><LoginLink /></MenuItem>
                </NotAuthenticated>
                <NotAuthenticated>
                    <MenuItem><Link to="/register">Sign Up</Link></MenuItem>
                </NotAuthenticated>
                <Authenticated>
                    <MenuItem><Link to="/todo">To Do</Link></MenuItem>
                </Authenticated>
                <Authenticated>
                    <MenuItem><Link to="/profile">Profile</Link></MenuItem>
                </Authenticated>
                <Authenticated>
                    <MenuItem><LogoutLink /></MenuItem>
                </Authenticated>
            </div>
        );
    }
}
