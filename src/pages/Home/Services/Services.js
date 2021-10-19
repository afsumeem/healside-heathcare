import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])



    return (
        <div className="container">

            <h2 className="mb-5 font-monospace fw-bold">Popular Counselling Services</h2>
            <div className=" text-start ">
                <div className="row m-0">
                    <div className="col-md-3 col-sm-12"></div>
                    <div className="col-md-6 col-sm-12 services-1st-row border-bottom border-1 border-primary  mb-3 pb-3">
                        {
                            services.filter(service1stRow => service1stRow.position === 1).map(service => <Service
                                key={service._id}
                                service={service}
                            >
                            </Service>)
                        }
                    </div>

                    <div className="col-md-3 col-sm-12"></div>

                </div>

                <div className="row m-0">
                    <div className="col-md-12 col-sm-12">
                        <div className="services-2nd-row">
                            {
                                services.filter(service2ndRow => service2ndRow.position === 2).map(service => <Service
                                    key={service._id}
                                    service={service}
                                >
                                </Service>)
                            }
                        </div>
                    </div>
                </div>

                <div class="collapse collapse-horizontal" id="collapseWidthExample">
                    <div className="row m-0 mt-3">
                        <div className="col-md-3 col-sm-12"></div>
                        <div className="col-md-6 col-sm-12 services-1st-row border-top border-1 border-primary pt-3">

                            {
                                services.filter(service3rdRow => service3rdRow.position === 3).map(service => <Service
                                    key={service._id}
                                    service={service}
                                >
                                </Service>)
                            }
                        </div>
                        <div className="col-md-3 col-sm-12"></div>

                    </div>
                </div>

                <button className="btn mx-auto my-3 d-block  fs-5 fw-bolder" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                    More Services <FontAwesomeIcon icon={faArrowAltCircleRight} />
                </button>

            </div>

        </div >
    );
};

export default Services;