import React, { useEffect, useState } from "react";
import Card2 from "../../components/card-2";
import Card1 from "../../components/card-1";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddressListAction,
  setDeliveryAddressAction,
} from "../../action/adress.action";
import Card3 from "../../components/card-3";
import OrderCard from "../../components/order-card";


const OrderNew = () => {
  const reduxDispatch = useDispatch();
  const { cartitems } = useSelector((state) => state.cart);
  const { addressList } = useSelector((state) => state.address);
  const [deliveryAddress, setDeliveyAddress] = useState({});

  const [orderItemState, setOrderItemState] = useState('active');
  const [addressState, setAddressState] = useState('initial');
  const [paymentState, setPaymentState] = useState('initial');

  useEffect(() => {
    reduxDispatch(getAddressListAction());
  }, [reduxDispatch]);

  const handleDeliverHere = (address) => {
    reduxDispatch(setDeliveryAddressAction(address));
    setDeliveyAddress(address);
    setAddressState('completed');
    setPaymentState('active')
  };

  const handleConfirmOrder = () => {
    setOrderItemState('completed');
    setAddressState('active');
  }

  return (
    <div className="flex justify-center bg-zinc-100">
      <div className="w-10/12 flex flex-row mt-5">
        <div className="left-section w-3/4 pr-2">
          <div className="pb-2">
            <OrderCard
              heading="Order Summary"
              number={1}
              cardState={orderItemState}
              onCompleteContent= {
                <div className="text-left">
                 {cartitems.length} Items
                </div>
              }
            >
              {cartitems.map((orderItem, index) => (
                <Card1 key={index + "20"} orderItem={orderItem}></Card1>
              ))}
              <div className="flex justify-start p-5">
                <button className="button-D max-w-xs" onClick={handleConfirmOrder}> Confirm Order</button>
              </div>
            </OrderCard>
          </div>
          <div className="pb-4">
            <OrderCard
              heading="Address Details"
              number={2}
              cardState={addressState}
              onCompleteContent={
                <>
                {deliveryAddress?.fullName}{" "}
                {deliveryAddress?.address1}, {deliveryAddress?.address2},{" "}
                {deliveryAddress?.city} Pin - {deliveryAddress?.pincode}
                </>
              }
            >
              <Card3
                addressList={addressList}
                partialCount={3}
                showPartial={true}
                handleDeliverHere={handleDeliverHere}
              ></Card3>
            </OrderCard>
          </div>
          <div className="pb-4">
            <OrderCard
              number={3}
              heading="Payment Information"
              cardState={paymentState}
            ></OrderCard>
          </div>
        </div>
        <div className="right-section w-1/4 pl-2">
          <Card2 cartitems={cartitems}></Card2>
        </div>
      </div>
    </div>
  );
};

export default OrderNew;
