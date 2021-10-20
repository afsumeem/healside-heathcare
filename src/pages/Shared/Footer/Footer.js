import React from 'react';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faFacebook, faInstagram, faSkype, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark m-0 ">
            <div className="container">

                {/* footer section */}
                <div className="row text-center m-0 text-white   px-5 pt-4 pb-3">
                    <div className="col-md-6 col-sm-12 d-block mb-3">
                        <div className="d-flex justify-content-center">

                            {/* footer contents */}
                            <div className="me-4 d-flex align-items-center fs-4">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                            </div>
                            <div >
                                <p>25 Jatrabari-1000
                                    <br />
                                    <span className="fs-6"> Dhaka Bangladesh</span>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex justify-content-center">
                            <div className="me-4 d-flex align-items-center fs-4">
                                <FontAwesomeIcon icon={faPhone} />
                            </div>
                            <div>
                                <p className="fs-6">+11 555 123-456 </p>
                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <div className="me-4 fs-4">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </div>
                            <div>
                                <p>support@hs.com </p>
                            </div>
                        </div>
                        <Button className="w-50 mt-3 " variant="outline-info" size="sm">
                            CONTACT US
                        </Button>

                    </div>

                    {/* social icons */}
                    <div className="col-md-6">
                        <h5>About HealSide Healthcare</h5>
                        <p className="fw-light mt-3 opacity-50">We help you to understand the problem. <br />We're the leading advisory center for you!<br />
                            We help you to understand the problem. <br />We're the leading advisory center for you!</p>

                        <Button variant="outline-info rounded-circle m-2" size="sm">
                            <a href="https://twitter.com/?lang=en"><FontAwesomeIcon icon={faTwitter} /></a>
                        </Button>

                        <Button variant="outline-primary rounded-circle m-2" size="sm">
                            <a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} /></a>
                        </Button>

                        <Button variant="outline-danger rounded-circle m-2" size="sm">
                            <a href="https://www.instagram.com/"> <FontAwesomeIcon icon={faInstagram} /></a>

                        </Button>

                        <Button variant="outline-info rounded-circle m-2" size="sm">
                            <a href="https://www.skype.com/en/"><FontAwesomeIcon icon={faSkype} /></a>

                        </Button>

                        <Button variant="outline-primary rounded-circle m-2" size="sm">
                            <a href="https://discord.com/"> <FontAwesomeIcon icon={faDiscord} /></a>

                        </Button>

                    </div>
                </div>

                <p className="text-white text-opacity-50 m-0">Copyright &copy;2021 All Rights Reserved | This Website is made with &#x003C;&#10083;&#x003E; by Afsana Meem </p>

            </div>
        </footer>
    );
};

export default Footer;
