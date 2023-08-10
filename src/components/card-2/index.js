import React, { useEffect, useState } from 'react';
import { calculateCartTotal } from '../../utils';



const Card2 = ({cartitems}) => {

  const [cartTotal, setCartTotal] = useState(0);
  useEffect(()=>{
    const cart_total = calculateCartTotal(cartitems);
    setCartTotal(cart_total);
  }, [cartitems])
    return (
        <div className="card-2-container border bg-white sticky top-0">
          <div className="border-b p-4">
            <div className="font-sans text-base font-semibold text-gray-500">
              PRICE DETAILS
            </div>
          </div>
          <div className="border-b p-4">
            <div className="flex justify-between pb-4">
              <div className="text-base font-normal text-gray-700">{`Price (${cartitems && cartitems.length} Items)`}</div>
              <div><span>₹ {cartTotal}</span></div>
            </div>
            <div className="flex justify-between pb-4">
              <div className="text-base font-normal text-gray-700">{"Discount"}</div>
              <div className="text-green-700 font-semibold"> <span>-</span> <span>₹</span>0</div>
            </div>
            <div className="flex justify-between pb-4">
              <div className="text-base font-normal text-gray-700">{"Delivery Charges"}</div>
              <div className="text-green-700 font-semibold">Free</div>
            </div>
          </div>
          <div className="flex justify-between p-4 border-b">
            <div className="font-sans text-xl font-semibold">Total Amount</div>
            <div className="font-sans text-xl font-semibold"> <span>₹</span>{cartTotal}</div>
          </div>

          <div className="flex items-center justify-center p-5">
            <div className="font-sans text-base text-green-600">{'You will save ₹50 of delivery charge on this order'}</div>
            </div>
        </div>
    );
};

export default Card2;