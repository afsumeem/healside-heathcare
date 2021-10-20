import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './SignUp.css';

const SignUp = () => {
    const { getUserEmail, getUserPassword, handleRegistration, error, getUserName } = useAuth();


    return (
        <div className="signup-container" >
            <div className="container">
                <div className="form-container w-50 p-5 mx-auto bg-dark bg-opacity-50">
                    <h2 className="pt-5 text-uppercase text-white fw-bolder">Create an Account</h2>
                    <Form onSubmit={handleRegistration} className="w-75 mx-auto pt-5">
                        <div className="row mb-3 text-danger">{error}</div>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Your Name"
                            className="mb-3 "
                        >
                            <Form.Control onBlur={getUserName} type="text" placeholder="Mark otto" />
                        </FloatingLabel>

                        <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control onBlur={getUserEmail} type="email" placeholder="abc@example.com" />
                        </FloatingLabel>
                        <FloatingLabel controlId="floatingPassword" label="Password">
                            <Form.Control onBlur={getUserPassword} type="password" placeholder="Password" />
                        </FloatingLabel>

                        <Button className="w-100 mt-3 bg-info text-dark fw-bolder" type="submit">Sign up</Button>

                    </Form>


                    <p className="ms-3 mt-3 text-white fw-bolder">Already have an account ? </ p>

                    <NavLink to="/login" className="btn rounded btn-primary">Log in </NavLink>

                </div>
            </div >
        </div >
    );
};

export default SignUp;