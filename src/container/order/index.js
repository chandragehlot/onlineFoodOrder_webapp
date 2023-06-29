import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function OrderContainer(props) {
  //const cart = useSelector(state => state.cart);
  const { cartitems, carttotal } = useSelector((state) => state.cart);
  const { defaultAddress } = useSelector((state) => state.address);
  const navigate = useNavigate();

  const paymentClickHandler = () => {
    navigate("/order-confirm");
  };

  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
      }}
    >
      <div className="text-l align-l">Confirm Order </div>

      <div className="section-container">
        <div className="section">
            <div className="section-heading">
            Cart
            </div>
            <div className="section-body">

            <div className="orderItems">
            {cartitems.length > 0 &&
              cartitems.map((cartItem) => (
                <p key={cartItem.id}>
                  {" "}
                  {cartItem.name} - {cartItem.type} - {cartItem.price}{" "}
                </p>
              ))}
            <div> Total - {carttotal}</div>
          </div>
            </div>
        </div>
        <div className="section">
            <div className="section-heading">
            Selected Address
            </div>
            <div className="section-body">
                
            <div> FullName : {defaultAddress.fullName} </div>
            <div> Phone Number : {defaultAddress.phoneNumber} </div>
            <div> AddressLine 1 : {defaultAddress.address1} </div>
            <div> AddressLine 2 : {defaultAddress.address2} </div>
            <div> City : {defaultAddress.city} </div>
            <div> Pin Code :{defaultAddress.pincode} </div>
            <div> Address Type :{defaultAddress.addresstype} </div>
            </div>
        </div>

        <div className="section">
            <div className="section-heading">
            Payment Options
            </div>
            <div className="section-body">
            <div className="flex-container-column">
            <div className="flex-item">
              <label htmlFor="netbanking">
                {" "}
                Net Banking {"      "}
                <input
                  type="radio"
                  name="paymentoption"
                  id="netbanking"
                ></input>
              </label>
            </div>
            <div className="flex-item">
              <label htmlFor="creditdebitcard">
                {" "}
                Credit/Debit Card {"      "}
                <input type="radio" name="paymentoption" id="creditdebitcard" />
              </label>
            </div>
            <div className="flex-item">
              <label htmlFor="cod">
                {" "}
                Cash on Delivery {"      "}
                <input type="radio" name="paymentoption" id="cod" />
              </label>
            </div>
            <div className="flex-item">
              <button className="button-A" onClick={paymentClickHandler}>
                payment
              </button>
            </div>
          </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default OrderContainer;
