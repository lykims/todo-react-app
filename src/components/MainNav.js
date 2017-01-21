import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

export default class MainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.toggle = this.toggle.bind(this);
    }
    toggle() {
        this.setState({open: !this.state.open});
    }
    render() {
        return (
            <div>
                <Drawer ref="leftMenu" open={this.state.open} docked={false} onRequestChange={this.toggle}>
                    <MenuItem onTouchTap={this.toggle}><Link to="/">Home</Link></MenuItem>
                    <MenuItem onTouchTap={this.toggle}><Link to="/about">About</Link></MenuItem>
                    <NotAuthenticated>
                        <MenuItem onTouchTap={this.toggle}><LoginLink /></MenuItem>
                    </NotAuthenticated>
                    <NotAuthenticated>
                        <MenuItem onTouchTap={this.toggle}><Link to="/register">Sign Up</Link></MenuItem>
                    </NotAuthenticated>
                    <Authenticated>
                        <MenuItem onTouchTap={this.toggle}><Link to="/todo">To Do</Link></MenuItem>
                    </Authenticated>
                    <Authenticated>
                        <MenuItem onTouchTap={this.toggle}><Link to="/profile">Profile</Link></MenuItem>
                    </Authenticated>
                    <Authenticated>
                        <MenuItem onTouchTap={this.toggle}><LogoutLink /></MenuItem>
                    </Authenticated>
                </Drawer>
                <AppBar ref="appBar" title=""
                    onLeftIconButtonTouchTap={this.toggle.bind(this)} />
            </div>
        );
    }
}
