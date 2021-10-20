import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar fixed="top" bg="dark" expand="lg">
                <Container>
                    <NavLink to="/home" className=" text-decoration-none">
                        <Navbar.Brand className="text-white">HealSide Healthcare</Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse className="text-white" id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink className="text-decoration-none mx-3 text-white d-flex align-items-center" to="/home">Home</NavLink>
                            <NavLink className="text-decoration-none mx-3 text-white  d-flex align-items-center" to="/about">About</NavLink>
                            <NavLink className="text-decoration-none mx-3 text-white  d-flex align-items-center" to="/doctors">Doctors</NavLink>
                            {user.email
                                ?
                                <Navbar.Text className="text-info fw-bolder mx-3 ">
                                    Welcome, {user.displayName && user.displayName}
                                </Navbar.Text>
                                :
                                <NavLink className="text-decoration-none mx-3 text-white  d-flex align-items-center" to="/login">Login</NavLink>
                            }

                            {user.email
                                ?
                                <NavLink onClick={logOut} className="text-decoration-none mx-3 text-white  d-flex align-items-center" to="/home">Logout</NavLink>
                                :
                                <NavLink className="text-decoration-none mx-3 text-white  d-flex align-items-center" to="/signup">Sign up</NavLink>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;