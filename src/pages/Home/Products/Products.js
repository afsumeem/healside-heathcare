import React from 'react';
import image from '../../../image/banner/aboutUs.jpg';
import image2 from '../../../image/banner/banner-1.jpg';

const Products = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <p>The HealSide Healthcare website offers streamlined mobile and desktop designs. The information on the site is clearly segmented for patients and doctors. That makes it easier for site visitors to find the exact information that they need. The site’s health library includes videos, articles and health tools.That makes it easier for site visitors to find the exact information that they need.</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid" src={image} alt="" />
                </div>

            </div>
            <div className="row">

                <div className="col-md-6 col-sm-12">
                    <img src={image2} alt="" />
                </div>
                <div className="img-fluid" className="col-md-6 col-sm-12">
                    <p>The HealSide Healthcare website offers streamlined mobile and desktop designs. The information on the site is clearly segmented for patients and doctors. That makes it easier for site visitors to find the exact information that they need. The site’s health library includes videos, articles and health tools.That makes it easier for site visitors to find the exact information that they need.</p>
                </div>
            </div>
        </div>
    );
};

export default Products;