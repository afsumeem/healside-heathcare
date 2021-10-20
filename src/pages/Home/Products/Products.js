import React from 'react';
import image from '../../../image/banner/aboutUs.jpg';
import image2 from '../../../image/banner/banner-1.jpg';

const Products = () => {
    return (
        <div className="container">
            <div className="row">

                {/* products section */}
                <div className="col-md-6 col-sm-12  text-start">
                    <h3 className="my-5">Best Therapy</h3>
                    <p >The HealSide Healthcare website offers streamlined mobile and desktop designs. The information on the site is clearly segmented for patients and doctors. That makes it easier for site visitors to find the exact information that they need. The site’s health library includes videos, articles and health tools.That makes it easier for site visitors to find the exact information that they need.</p>
                </div>
                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid" src={image} alt="" />
                </div>

            </div>
            <div className="row">

                <div className="col-md-6 col-sm-12">
                    <img className="img-fluid" src={image2} alt="" />
                </div>
                <div className="col-md-6 col-sm-12 text-start">
                    <h3 className="my-5">Always Looking for better ways to help you</h3>
                    <p className="mt-5 text-start">The HealSide Healthcare website offers streamlined mobile and desktop designs. The information on the site is clearly segmented for patients and doctors. That makes it easier for site visitors to find the exact information that they need. The site’s health library includes videos, articles and health tools.That makes it easier for site visitors to find the exact information that they need.</p>
                </div>
            </div>
        </div>
    );
};

export default Products;