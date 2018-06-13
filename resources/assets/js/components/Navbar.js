import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Navbar extends Component {

    constructor(props){
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className="container nav-bar">
                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <Link
                            to={'/'}
                            className={`nav-link ${this.props.location.pathname === '/' ? 'active' : ''}`}
                        >
                            GALLERY
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link
                            to={'/upload'}
                            className={`nav-link ${this.props.location.pathname === '/upload' ? 'active' : ''}`}
                        >
                            UPLOADER
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link
                            to={'/manage'}
                            className={`nav-link ${this.props.location.pathname === '/manage' ? 'active' : ''}`}
                        >
                            MANAGE
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/logout">LOGOUT</a>
                    </li>
                </ul>
            </div>
        );
    }
}