import React from 'react';

const Card2 = ({carttotal}) => {
    return (
        <div className="card-2-container border bg-white sticky top-0">
          <div className="border-b p-4">
            <div className="font-sans text-base font-semibold text-gray-500">
              PRICE DETAILS
            </div>
          </div>
          <div className="border-b p-4">
            <div className="flex justify-between pb-4">
              <div className="text-base font-normal text-gray-700">{"Price (2 Items)"}</div>
              <div><span>₹</span>8580</div>
            </div>
            <div className="flex justify-between pb-4">
              <div className="text-base font-normal text-gray-700">{"Discount"}</div>
              <div className="text-green-700 font-semibold"> <span>-</span> <span>₹</span>3435</div>
            </div>
            <div className="flex justify-between pb-4">
              <div className="text-base font-normal text-gray-700">{"Delivery Charges"}</div>
              <div className="text-green-700 font-semibold">Free</div>
            </div>
          </div>
          <div className="flex justify-between p-4 border-b">
            <div className="font-sans text-xl font-semibold">Total Amount</div>
            <div className="font-sans text-xl font-semibold"> <span>₹</span>{carttotal}</div>
          </div>

          <div className="flex items-center justify-center p-5">
            <div className="font-sans text-base text-green-600">{'You will save 1000 on this order'}</div>
            </div>
        </div>
    );
};

export default Card2;