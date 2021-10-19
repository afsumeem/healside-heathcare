import React, { useRef } from 'react';
import { Button, Form, } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Registration = () => {
    const { createUser } = useAuth();


    const { register, handleSubmit, watch } = useForm({});
    const password = useRef({});
    password.current = watch("password", "");


    const onSubmit = async data => {
        // alert(JSON.stringify(data));
        console.log(data);
        createUser();
    }


    return (
        <div>
            <div className="mt-5">
                <h2 className="pt-3 text-uppercase fw-bolder mb-5">Please Register</h2>

                <form onSubmit={e => e.preventDefault()} className="d-flex flex-column w-50 mx-auto">
                    <div className="d-flex">
                        <input type="text" className="p-2 w-50 me-2" placeholder="First Name" {...register("firstName", { required: true, maxLength: 20 })} />
                        <br />
                        <input type="text" className="p-2 w-50" placeholder="Last Name" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                    </div><br />
                    <input type="email" placeholder="abc@example.com" className="p-2"  {...register("email")} /><br />

                    <input
                        placeholder="Enter a New Password"
                        className="p-2"
                        type="password"
                        {...register("password", {
                            required: "You must specify a password",
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }
                        })
                        }
                    /><br />

                    <input className="p-2"
                        placeholder="Re-enter Password"
                        type="password"
                        {...register("password_repeat", {

                            required: "You must re-enter your password",
                            validate: value => value === password.current || "The passwords do not match"
                        })
                        }
                    /><br />

                    <div className="d-flex">
                        <input type="number" placeholder="age" className="p-2 w-50 me-2" {...register("age", { required: true, min: 18, max: 99 })} /><br />

                        <select className="p-2 w-50" {...register("gender")}>
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">other</option>
                        </select><br />
                    </div>

                    < Button onClick={handleSubmit(onSubmit)} className="w-100 mt-3 rounded" type="submit" > Sign in</Button>

                </form>


                <div>
                    <div className="d-flex justify-content-center">
                        <Form.Check type="checkbox" />
                        <p className="ms-3">Already have an account?</p>

                    </div>

                    <NavLink to="/register"><button className="btn btn-info">Log in</button> </NavLink>
                </div>
            </div >
        </div >
    );
};

export default Registration;