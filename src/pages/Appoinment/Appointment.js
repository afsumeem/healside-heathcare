import React from 'react';
import { useForm } from "react-hook-form";
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Appointment = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const { user } = useAuth();

    const onSubmit = () => {
        alert("Form submitted successfully");
    };

    return (
        <div className="mt-5">
            <h2 className="text-dark pt-3">Online Doctor Appointment Form</h2>
            <div className="d-flex justify-content-center">

                {/* appointment form */}
                <form className="pt-3 pb-5" onSubmit={handleSubmit(onSubmit)}>

                    <input className="m-3 w-50 px-4 py-2" defaultValue={user.displayName} {...register("name")} />
                    <input className=" m-3 w-50 px-4 py-2" placeholder="age" {...register("Age", { required: true })} />

                    <input className="m-3 w-50 px-4 py-2" placeholder="male/female"{...register("Gender", { required: true })} />
                    <input className=" m-3 w-50 px-4 py-2" defaultValue={user.email} {...register("email", { required: true })} />
                    {errors.email && <span className="text-danger">Please Enter Your Email</span>}

                    <input className="d-block mx-auto m-3 btn btn-info w-50" type="submit" />

                    <NavLink to="/home" className=" text-decoration-none d-block mx-auto m-3 btn btn-info w-25 bg-secondary" >Home</NavLink>

                </form>
            </div>
        </div>

    );
};

export default Appointment;