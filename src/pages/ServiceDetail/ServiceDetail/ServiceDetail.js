import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Details from '../Details/Details';

const ServiceDetail = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        fetch('/fakedata.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, []);

    const exactDataItem = details.filter(serviceId => serviceId._id === id);

    return (
        <div className="my-5">
            {
                exactDataItem.map(itemsDetail => <Details
                    itemsDetail={itemsDetail}
                    key={itemsDetail._id}
                >
                </Details>)
            }
        </div>
    );
};

export default ServiceDetail;