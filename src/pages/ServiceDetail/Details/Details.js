import React from 'react';
import { NavLink } from 'react-router-dom';
import './Details.css';
import { faClock, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Details = (props) => {
    const { name, picture2, picture3, picture4, picture5, desc, time, phone } = props.itemsDetail;
    return (
        <div className="container mt-5 ">
            <div className="row m-0">
                <div className="col-md-6 text-start border mt-4 p-0">

                    {/* service detail */}
                    <div className="p-5">
                        <h2>{name}</h2>
                        <br />
                        <p className="mb-5">{desc}</p>
                        <h6 ><FontAwesomeIcon icon={faClock} /> Every Week: Monday to Thursday (<span className="font-monospace">{time})</span></h6>
                        <h6 className="font-monospace"><FontAwesomeIcon icon={faPhone} /> {phone} </h6>
                    </div>

                    <NavLink to="/appointment"><button className="btn w-100 btn-primary rounded-0">Appointment Now</button></NavLink>

                </div>


                {/* Service Detail images */}

                <div className="col-md-6 mt-4 ">
                    <div className="row mt-2">
                        <div className="col-md-6 ps-4">
                            <img className="img-fluid details-img  mb-2" src={picture2} alt="" />
                            <img className="img-fluid details-img  my-2" src={picture3} alt="" />
                        </div>
                        <div className="col-md-6">
                            <img className="img-fluid details-img  mt-5 mb-2" src={picture4} alt="" />
                            <img className="img-fluid details-img  my-2" src={picture5} alt="" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;