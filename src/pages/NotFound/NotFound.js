import React from 'react';
import image from '../../image/not-found.png'

const NotFound = () => {
    return (
        // not found page

        <div className="mt-3">
            <img src={image} className="mt-5" alt="not-found" style={{ height: "500px" }} />
        </div>
    );
};

export default NotFound;