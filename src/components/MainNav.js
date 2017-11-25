import React from 'react';
import { Link } from 'react-router';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';

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
                    {/*<MenuItem onTouchTap={this.toggle}><Link to="/login">Login</Link></MenuItem>*/}
                    {/*<MenuItem onTouchTap={this.toggle}><Link to="/register">Sign Up</Link></MenuItem>*/}
                    <MenuItem onTouchTap={this.toggle}><Link to="/todo">To Do</Link></MenuItem>
                    {/*<MenuItem onTouchTap={this.toggle}><Link to="/profile">Profile</Link></MenuItem>*/}
                    {/*<MenuItem onTouchTap={this.toggle}>Logout</MenuItem>*/}
                </Drawer>
                <AppBar ref="appBar" title=""
                    onLeftIconButtonTouchTap={this.toggle.bind(this)} />
            </div>
        );
    }
}
