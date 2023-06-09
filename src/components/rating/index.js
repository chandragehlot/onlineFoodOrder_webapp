import React from 'react';
import { FaStar } from "react-icons/fa";

const Rating = (props) => {
    const { rating } = props || {};
    const ratingArr = new Array(rating).fill(); 
    return (
        <div className="rating__cont">
            { ratingArr.length > 0 && ratingArr.map((item, index) => (
                <div className='rating__icon' key={index+1}> 
                    <FaStar />
                </div>
            )) }
        </div>
    );
};

export default Rating;