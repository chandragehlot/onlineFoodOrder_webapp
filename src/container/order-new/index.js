import React, { useEffect, useState } from "react";
import Accordian from "../../components/accordion";
import Card2 from "../../components/card-2";
import Card1 from "../../components/card-1";
import { useDispatch, useSelector } from "react-redux";
import {
  getAddressListAction,
  setDeliveryAddressAction,
} from "../../action/adress.action";
import Card3 from "../../components/card-3";

const OrderNew = () => {
  const reduxDispatch = useDispatch();
  const { cartitems, carttotal } = useSelector((state) => state.cart);
  const { addressList } = useSelector((state) => state.address);
  const [deliveryAddress, setDeliveyAddress] = useState({});
  const [orderItemComplet, setOrderItemComplet] = useState(false);
  const [addressComplete, setAddressComplete] = useState(false);
  const [paymentComplete, setPaymentComplete] = useState(false);

  useEffect(() => {
    reduxDispatch(getAddressListAction());
  }, [reduxDispatch]);

  const handleDeliverHere = (address) => {
    reduxDispatch(setDeliveryAddressAction(address));
    setDeliveyAddress(address);
    setAddressComplete(true);
  };

  const handleConfirmOrder = () => {
    setOrderItemComplet(true);
  }

  return (
    <div className="flex justify-center bg-zinc-100">
      <div className="w-10/12 flex flex-row mt-5">
        <div className="left-section w-3/4 pr-2">
          <div className="pb-2">
            <Accordian
              heading="Order Summary"
              number={1}
              defaultExpend={true}
              showChevron={false}
              isCompleted = {orderItemComplet}
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
            </Accordian>
          </div>
          <div className="pb-4">
            <Accordian
              heading="Address Details"
              number={2}
              showChevron={false}
              isDisabled={false}
              defaultExpend={true}
              onCompleteContent={
                <>
                {deliveryAddress?.fullName}{" "}
                {deliveryAddress?.address1}, {deliveryAddress?.address2},{" "}
                {deliveryAddress?.city} Pin - {deliveryAddress?.pincode}
                </>
              }
              isCompleted={addressComplete}
            >
              <Card3
                addressList={addressList}
                partialCount={3}
                showPartial={true}
                handleDeliverHere={handleDeliverHere}
              ></Card3>
            </Accordian>
          </div>
          <div className="pb-4">
            <Accordian
              number={3}
              heading="Payment Information"
              showChevron={false}
              isDisabled={false}
              defaultExpend={true}
            ></Accordian>
          </div>
        </div>
        <div className="right-section w-1/4 pl-2">
          <Card2 carttotal={carttotal}></Card2>
        </div>
      </div>
    </div>
  );
};

export default OrderNew;
