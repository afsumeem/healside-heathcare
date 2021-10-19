import React from 'react';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Doctor.css';

const Doctor = (props) => {

    const { picture, name, phone, designation } = props.doctor;
    return (
        <div class="doctor-information border rounded">
            <img className="img-fluid" src={picture} alt="" />
            <h5>{name}</h5>
            <p className="text-primary fs-6 fw-bold">{designation}</p>
            <div className="d-flex mx-auto doctor-info">
                <div style={{ height: "40px", width: "40px" }} className="bg-danger bg-opacity-25 rounded-circle m-1">
                    <FontAwesomeIcon className="rounded-circle fs-4 mt-2" icon={faPhoneAlt} color="success" />
                </div>
                <p className="mx-auto mt-1">{phone}</p>
            </div>
        </div>
    );
};

export default Doctor;