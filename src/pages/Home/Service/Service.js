import { faClock, faPhone, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Service.css';

const Service = (props) => {

    const { picture1, name, desc, time, phone, _id } = props.service;

    return (
        <div className="border rounded-2">

            {/* single service item */}

            <NavLink to={`/service/${_id}`}>
                <div className="service-img">
                    <img className="img-fluid img" src={picture1} alt="" />
                    <div class="appointMent">
                        <div class="appointment-icon text-white fs-1"><FontAwesomeIcon icon={faPlus} /></div>
                    </div>
                </div>
            </NavLink>

            <div className="px-3">
                <h5>{name}</h5>
                <p>{desc.slice(0, 60)}</p>
                <p className="m-0"><FontAwesomeIcon icon={faClock} /> {time}</p>
                <p><FontAwesomeIcon icon={faPhone} /> {phone}</p>
            </div>
            <NavLink to={`/service/${_id}`}>
                <Button className="w-100 b bg-info bg-opacity-25 btn border-0 text-dark fw-bold">Learn More</Button>
            </NavLink>
        </div >
    );
};

export default Service;