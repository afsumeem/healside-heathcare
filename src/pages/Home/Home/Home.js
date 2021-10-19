import React from 'react';
import { Button, Carousel } from 'react-bootstrap';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faMedkit, faStethoscope } from '@fortawesome/free-solid-svg-icons';
import img1 from '../../../image/banner/banner-1.jpg';
import img2 from '../../../image/banner/banner-2.jpg';
import img3 from '../../../image/banner/banner-3.jpg';
import Services from '../Services/Services';
import Facilities from '../Facilities/Facilities';
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="banner-container">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100 banner" src={img1} alt="First slide" />

                        <Carousel.Caption className="mb-5">
                            <h1>HealSide HealthCare</h1>
                            <p className="fw-light mt-3 fs-5">We help you to understand the problem. <br />We're the leading advisory center for you!</p>
                            <NavLink to="/appointment" className="text-decoration-none"><Button className="mb-5 mt-5 w-25" variant="primary">MAKE AN APPOINTMENT</Button>
                            </NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100 banner" src={img2} alt="Second slide" />

                        <Carousel.Caption className="mb-5">
                            <h1>Best Psychology and Counselling.</h1>
                            <p className="fw-light fs-5 mt-3">We help you to understand the problem.<br />We're the leading advisory center for you!</p>
                            <NavLink to="/appointment" className="text-decoration-none"> <Button className="mb-5 mt-5 w-25" variant="primary">MAKE AN APPOINTMENT</Button>
                            </NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100 banner" src={img3} alt="Third slide" />

                        <Carousel.Caption className="mb-5">
                            <h1>Get an appointment today!</h1>
                            <p className="fw-light mt-3 fs-5">Find a Better Place Healthcare Development.<br />We help you to understand the problem.</p>
                            <NavLink to="/appointment" className="text-decoration-none"><Button className="mb-5 mt-5 w-25" variant="primary">MAKE AN APPOINTMENT</Button>
                            </NavLink>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-4 col-sm-12 bg-warning bg-opacity-25 p-3 d-flex border-start border-primary border-5">
                        <div className="d-flex align-items-center ">
                            <FontAwesomeIcon className="fs-1 mx-3 " icon={faBrain} />
                        </div>
                        <div className="text-start">
                            <h5 className="mb-3">Specialized Therapy Support</h5>
                            <p>Our Clinic Largest Private Mental Health Partner, Carefully Selected Nationwide Team</p>
                        </div>

                    </div>
                    <div className="col-md-4 col-sm-12 bg-info bg-opacity-50 p-3 d-flex">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon className="fs-1 mx-3" icon={faMedkit} />
                        </div>
                        <div className="text-start">
                            <h5>Diagnosis and Investigation</h5>
                            <p>Our Clinic Largest Private Mental Health Partner, Carefully Selected Nationwide Team</p>
                        </div>

                    </div>
                    <div className="col-md-4 bg-danger col-sm-12 bg-opacity-50 p-3 d-flex">
                        <div className="d-flex align-items-center">
                            <FontAwesomeIcon className="fs-1 mx-3" icon={faStethoscope} />
                        </div>
                        <div className="text-start">
                            <h5>Medical Treatment Surgical</h5>
                            <p>Our Clinic Largest Private Mental Health Partner, Carefully Selected Nationwide Team</p>
                        </div>

                    </div>
                </div>
            </div>
            <Services></Services>
            <Facilities></Facilities>
        </div>
    );
};

export default Home;