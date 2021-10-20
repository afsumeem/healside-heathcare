import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBehance, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Header.css';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar fixed="top" bg="dark" className="bg-opacity-75 py-3" expand="lg">
                <Container>
                    <NavLink to="/home" className=" text-decoration-none">
                        <Navbar.Brand className="text-white">HealSide Healthcare</Navbar.Brand>
                    </NavLink>


                    {/* address bar */}
                    <div className="location mx-auto rounded py-2 px-4 ms-4">
                        <p className="mb-0 fs-6">
                            <i className="fas fa-map-marker-alt text-primary"></i>
                            <span className="text-white">Dhaka, Bangladesh | 01712345678 |</span>

                            <FontAwesomeIcon className="fs-6 text-primary mx-2" icon={faFacebook} />
                            <FontAwesomeIcon className="fs-6 text-danger me-2" icon={faInstagram} />
                            <FontAwesomeIcon className="fs-6 text-info me-2" icon={faTwitter} />
                            <FontAwesomeIcon className="fs-6 text-primary me-2" icon={faBehance} />

                        </p>
                    </div>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                    {/* menu item */}

                    <Navbar.Collapse className="text-white" id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="text-decoration-none mx-3 rounded py-2 px-2 text-white  menu-item d-flex align-items-center" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none mx-3 rounded py-2 px-2 menu-item text-white  d-flex align-items-center" to="/about">About</NavLink>
                            <NavLink className="text-decoration-none mx-3 rounded py-2 px-2 text-white  menu-item d-flex align-items-center" to="/doctors">Doctors</NavLink>


                            {/* user info, login/signup  */}

                            {user.email
                                ?
                                <Navbar.Text className="text-info fw-bolder mx-2 ">
                                    <FontAwesomeIcon className="fs-6 me-1" icon={faUser} />
                                    {user.displayName && user.displayName}
                                </Navbar.Text>
                                :
                                <NavLink className="text-decoration-none mx-3 rounded py-2 px-2 text-white d-flex align-items-center menu-item" to="/login">Login</NavLink>
                            }

                            {user.email
                                ?
                                <NavLink onClick={logOut} className="text-decoration-none mx-3 rounded px-2 text-white  d-flex align-items-center  menu-item" to="/home">Logout</NavLink>
                                :
                                <NavLink className="text-decoration-none rounded py-2 mx-3 text-white  d-flex align-items-center  menu-item" to="/signup">Sign up</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;