import { faBoxOpen, faCodeBranch, faHeartbeat } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Facilities.css'

const Facilities = () => {
    return (
        <div>
            <div className="facilities"></div>

            {/* facilities section */}
            <div className="row m-0 text-white">

                <div className="col-md-4 col-sm-12 bg-success px-3 py-5 d-flex">
                    <div className="d-flex align-items-center ">
                        <FontAwesomeIcon className="fs-1 mx-3 " icon={faHeartbeat} />
                    </div>
                    <div className="text-start">
                        <h1 className="mb-3">50<sup>+</sup></h1>
                        <h4>In-House Doctors</h4>
                        <p>Most Experienced and Qualified</p>
                    </div>
                </div>

                <div className="col-md-4 col-sm-12 bg-success bg-opacity-75  py-5 px-3 d-flex">
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="fs-1 mx-3" icon={faCodeBranch} />
                    </div>
                    <div className="text-start">
                        <h1 className="mb-3">15<sup>+</sup></h1>
                        <h4>Medical Brances</h4>
                        <p>Available Around Your City</p>
                    </div>
                </div>

                <div className="col-md-4 bg-success col-sm-12 py-5 px-3  d-flex">
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="fs-1 mx-3" icon={faBoxOpen} />
                    </div>
                    <div className="text-start">
                        <h1 className="mb-3">1000<sup>+</sup></h1>
                        <h4>Success Stories</h4>
                        <p>Top Level Professional Advices</p>
                    </div>
                </div>

            </div>

            <div className="facilities"></div>

        </div>
    );
};

export default Facilities;