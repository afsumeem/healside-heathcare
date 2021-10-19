import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {

    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, []);

    return (
        <div className="mb-5 container">
            <div className="mt-4">
                <h2 className="py-5">Consult Our Doctors</h2>
            </div>

            <div className="doctors-container">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor._id}
                        doctor={doctor}
                    >
                    </Doctor>)
                }
            </div>



        </div>
    );
};

export default Doctors;