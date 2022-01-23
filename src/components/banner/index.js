import React from 'react';
import { config, getImageUrl } from '../../config';

const Banner = () => {
    const banner_img_key = config.BANNER_IMAGE_KEY;
    return (
        <div className="banner__section">
            <div className="banner__tagline-layer">
                <div className="banner__tagline-cont">
                    Eat B healty, Stay B healthy
                </div>
            </div>
            <img className="banner__img" src={getImageUrl(banner_img_key)} alt="Banner" />
        </div>
    );
};

export default Banner;