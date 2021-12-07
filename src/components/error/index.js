import React from 'react';
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="error__section">
            <div className="error_desc">
                <h1 className="error__item1">{'Something went wrong'}</h1>
                <div className="error__item2">
                    <span>Click</span> 
                    <span> 
                        <Link to="/">{` here `}</Link> 
                    </span> 
                    <span> to try again </span>
                </div>
            </div>
        </div>
    );
};

export default Error;