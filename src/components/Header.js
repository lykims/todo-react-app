import React from 'react';
import { Link } from 'react-router';
import { LoginLink, LogoutLink, Authenticated, NotAuthenticated } from 'react-stormpath';

export default class Header extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
                <div className="container">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-main-menu">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">Home</Link>
                    </div>

                    <div id="nav-main-menu" className="collapse navbar-collapse navbar-right">
                        <ul className="nav navbar-nav">
                            <NotAuthenticated>
                                <li>
                                    <LoginLink />
                                </li>
                            </NotAuthenticated>
                            <NotAuthenticated>
                                <li>
                                    <Link to="/register">Sign Up</Link>
                                </li>
                            </NotAuthenticated>
                            <Authenticated>
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                            </Authenticated>
                            <Authenticated>
                                <li>
                                    <LogoutLink />
                                </li>
                            </Authenticated>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
