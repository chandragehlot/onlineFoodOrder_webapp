import React from 'react';


const Banner = ({src}) => {
    
    return (
        <div className="banner__section">
            <div className="banner__tagline-layer">
                <div className="banner__tagline-cont">
                    Eat B healty, Stay B healthy
                </div>
            </div>
            <img className="banner__img" src={src} alt="Banner" />
        </div>
    );
};

export default Banner;