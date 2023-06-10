import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const orderNumber = "1214122254";

function OrderConfirmation() {
  const { cart : { carttotal}, address : { defaultAddress }} = useSelector(state => state);
  const navigate = useNavigate();
  const redirectToTrackOrder = () => {
    navigate("/order-tracking");
  }

  return (
    <div>
      <h1>Order Confirmation</h1>

      <div className="text-l-db pd-20">Order No . - {orderNumber}</div>

      <div className="text-s-dl pd-20">Order Details Total Amount - {carttotal}</div>

      <div className="text-l-db pd-20">Address To Deliver</div>
        <div> FullName : {defaultAddress.fullName} </div>
        <div> Phone Number : {defaultAddress.phoneNumber} </div>
        <div> AddressLine 1 : {defaultAddress.address1} </div>
        <div> AddressLine 2 : {defaultAddress.address2} </div>
        <div> City : {defaultAddress.city} </div>
        <div> Pin Code :{defaultAddress.pincode} </div>
        <div> Address Type :{defaultAddress.addresstype} </div>
      <div className="text-l-db pd-20">
        <button onClick={redirectToTrackOrder}> TrackOrder</button>
      </div>
    </div>
  );
}

export default OrderConfirmation;
