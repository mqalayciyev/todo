import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">


                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">Shopping Cart</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                                    Dropdown
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#">Action</a>
                                    <a className="dropdown-item" href="#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Something else here</a>
                                    <div className="position-relative sub-menu-toggle">
                                        <div className="dropdown-item" data-toggle="sub-menu">
                                            Dropright
                                            <i class="fa fa-chevron-right" style={{ verticalAlign: 'middle' }}></i>
                                        </div>
                                        <div className="sub-menu">
                                            <a className="sub-menu-item" href="#">Link 1</a>
                                            <a className="sub-menu-item" href="#">Link 2</a>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" href="#">Disabled</a>
                            </li>
                        </ul>
                        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#loginModal">
                            Login
                        </button>
                    </div>
                </nav>




                <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="loginModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='Username' />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder='Password' />
                                </div>
                                <button className="btn btn-success">Login</button>
                                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#registerModal">
                                    Register
                                </button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModalLabel" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="registerModalLabel">Modal title</h5>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='Last Name' />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='First Name' />
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control" placeholder='Email' />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control" placeholder='Password' />
                                </div>
                                <button className="btn btn-success">Register</button>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Header;