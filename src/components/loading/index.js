import React from 'react';
import LoadingSymbol from '../../assets/loading.svg';

const Loading = () => {
    return (
        <div className="loading__cont">
            <div className="laoding_base">
                <div className="loading__symbol-cont">
                    <div className="loading__symbol">
                        <img src={LoadingSymbol} alt="Loading..." />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Loading;