import React from 'react';
import { Button, Col, FloatingLabel, Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsingGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    //handle google sign in button
    const handleGoogleLogIn = () => {
        signInUsingGoogle()
            .then((result) => {
                history.push(redirect_uri)
            })
    }

    const handleSubmit = e => {
        console.log("login")
        e.preventDefault()
    }


    return (

        <div className="mt-5">
            <h2 className="pt-5 text-uppercase fw-bolder">Please Log In</h2>
            <Form onSubmit={handleSubmit} className="w-25 mx-auto pt-5">
                <FloatingLabel
                    controlId="floatingInput"
                    label="Email address"
                    className="mb-3"
                >
                    <Form.Control type="email" placeholder="abc@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                    <Form.Control type="password" placeholder="Password" />
                </FloatingLabel>

                <Button className="w-100 mt-3 rounded-pill" type="submit">Sign in</Button>

            </Form>
            <div>
                <p>Or Sign in Using</p>

                <Button variant="outline-danger"
                    onClick={handleGoogleLogIn}
                    className="mt-5">Google Sign In
                </Button>

            </div>


            <div>
                <div className="d-flex justify-content-center">
                    <Form.Check type="checkbox" />
                    <p className="ms-3">Don't have account?</p>
                </div>

                <NavLink to="/register"><button className="btn btn-info">Signup Now</button> </NavLink>
            </div>
        </div >
    );
};

export default Login;