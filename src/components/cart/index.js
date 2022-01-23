import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
import { BiFoodTag } from "react-icons/bi";

const Cart = () => {
  const { cartitems = [], carttotal = null } = useSelector(state => state.cart)
  return (
    <div className="cart__cont">

      <div className="flex-vc-hl">
        <div className="pd-r-10 text-xl-d">
          <FaShoppingCart />
        </div>
        <h2 className="text-xxl"> 
          Cart 
        </h2>      
      </div>

      {
        (cartitems.length) ?
        <div>
      <p className="text-xs"> {`${cartitems.length} Items` }</p>
      {
        cartitems.map((item,index) => (
          <div className="cart__item text-s">
          <div className={`cart__item_foodtag__${item.type}`}>
            <BiFoodTag />
          </div>
          <div className="cart__item-name"> { item.name } </div>
          <div className="cart__item-quantity"> { item.quantity } </div>
          <div className="cart__item-price"> { item.item_total_price } </div>
          </div>
        ))
      }

      <div className="cart__total">
        <div className="cart__total-tag"> SubTotal </div>
        <div className="cart__total-val"> { carttotal } </div>
      </div>
      <div className="cart__disclaimer">
        Extra charges may apply
      </div>
      <div className="cart__checkout">
        <button className="button-A">Checkout</button>
      </div>
      </div>
      :
      <div className="flex-vc-hl"> No Iterm Selected Yet </div> }
    </div>
  );
};

export default Cart;
