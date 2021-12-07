import React from 'react';
import bannerImg from '../../assets/banner.jpeg';

const Banner = () => {
    return (
        <div className="banner__section">
            <div className="banner__tagline-layer">
                <div className="banner__tagline-cont">
                    Eat healty, Stay healthy
                </div>
            </div>
            <img className="banner__img" src={bannerImg} alt="" />
        </div>
    );
};

export default Banner;