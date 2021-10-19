import React from 'react';
import { Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Registration = () => {

    const { getUserEmail, getUserPassword, handleSubmitForm } = useAuth();
    return (

        <div className="mt-5 ">
            <h2 className="pt-3 text-uppercase fw-bolder mb-5">Please Register</h2>
            <Form className=" w-50 mx-auto" onSubmit={handleSubmitForm}>

                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Form.Control onBlur={getUserEmail} type="email" placeholder="email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formPlaintextPassword">
                    <Form.Control onBlur={getUserPassword} type="password" placeholder="Password" required />
                </Form.Group>

                <NavLink to="/register"><button type="submit" className="btn btn-info w-100">submit</button> </NavLink>

            </Form>

            <div className="d-flex justify-content-center  my-4">

                <p className="ms-3">Already have an account?</ p>
                <NavLink to="/login">Log in </NavLink>
            </div>
        </div >
    );
};

export default Registration;