import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faTrophy, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import image from '../../image/banner/aboutUs.jpg';
import { NavLink } from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className="bg-success bg-opacity-25">

            <div className="row pt-5 mx-0">

                {/* about us banner */}

                <div className="col-md-6 my-5">
                    <img src={image} className="img-fluid" alt="" />
                </div>


                {/* about us */}
                <div className="col-md-6 text-start px-5 my-5">
                    <h2 className="mb-2">ABOUT US</h2>
                    <hr className="w-25" />
                    <p className="mb-3">The HealSide Healthcare website offers streamlined mobile and desktop designs. The information on the site is clearly segmented for patients and doctors. That makes it easier for site visitors to find the exact information that they need. The site’s health library includes videos, articles and health tools.That makes it easier for site visitors to find the exact information that they need. </p>

                    <div className="row m-0 mt-3 text-center">
                        <div className="col-md-3 border  p-2">
                            <FontAwesomeIcon className="fs-1 mx-3 " icon={faUser} />
                            <h4 className="font-monospace">1000 +</h4>
                            <p className="text-primary font-monospace">Happy clients</p>
                        </div>

                        <div className="col-md-3 border p-2">
                            <FontAwesomeIcon className="fs-1 mx-3" icon={faUsers} />
                            <h4 className="font-monospace">120 +</h4>
                            <p className="text-primary font-monospace">Professional Specialist</p>

                        </div>
                        <div className="col-md-3 border  p-2">

                            <FontAwesomeIcon className="fs-1 mx-3" icon={faGem} />
                            <h4 className="font-monospace">140+</h4>
                            <p className="text-primary font-monospace">Successful work</p>

                        </div>
                        <div className="col-md-3 border p-2">
                            <FontAwesomeIcon className="fs-1 mx-3" icon={faTrophy} />
                            <h4 className="font-monospace">450 +</h4>
                            <p className="text-primary font-monospace">Diploma and awards</p>
                        </div>
                    </div>

                    {/* button */}
                    <NavLink to="/appointment"><button className="btn btn-info w-100 mt-4">APPOINTMENT</button></NavLink>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;