import React from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Menu from './Menu';

export default class MainNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }
    toggle() {
        this.setState({open: !this.state.open});
    }
    render() {
        return (
            <div>
                <Drawer ref="leftMenu" open={this.state.open} docked={false} onRequestChange={this.toggle.bind(this)}>
                    <Menu/>
                </Drawer>
                <AppBar ref="appBar" title=""
                    onLeftIconButtonTouchTap={this.toggle.bind(this)} />
            </div>
        );
    }
}
