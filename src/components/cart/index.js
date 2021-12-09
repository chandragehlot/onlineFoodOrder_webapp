import React from "react";

const Cart = () => {
  return (
    <div className="cart__cont">
      <h2> Cart </h2>
      <p> 4 Items</p>
      <div className="cart__item">
        <div className="cart__item-name"> Paneer Tikka </div>
        <div className="cart__item-quantity"> 2 </div>
        <div className="cart__item-price"> 545.89 </div>
      </div>
      <div className="cart__checkout">
        <button className="button-A">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
