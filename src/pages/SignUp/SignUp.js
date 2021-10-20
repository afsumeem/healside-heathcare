import React from 'react';
import { FloatingLabel, Form, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SignUp = () => {
    const { getUserEmail, getUserPassword, handleRegistration, error, getUserName } = useAuth();
    return (
        <div>
            <div className="mt-5 ">
                <h2 className="pt-3 text-uppercase fw-bolder mb-5">Please Register</h2>

                <Form onSubmit={handleRegistration} className="w-50 mx-auto pt-5">
                    <div className="row mb-3 text-danger">{error}</div>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Name"
                        className="mb-3"
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

                    <Button className="w-100 mt-3" type="submit">Sign in</Button>

                </Form>

                <div className="d-flex justify-content-center  my-4">

                    <p className="ms-3">Already have an account?</ p>
                    <NavLink to="/login">Log in </NavLink>
                </div>
            </div >
        </div>
    );
};

export default SignUp;