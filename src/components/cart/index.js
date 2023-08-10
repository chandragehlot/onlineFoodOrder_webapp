import React, { useEffect, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { BiFoodTag } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { calculateCartTotal } from "../../utils";

const Cart = (props) => {
  const navigate = useNavigate();
  const [cartTotal, setCartTotal] = useState(0);
  const { cartitems = [] } = props;

  useEffect(() => {
    const cart_total = calculateCartTotal(cartitems);
    setCartTotal(cart_total);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[[...cartitems.map(item=> item.quantity)]]);

  const checkoutHandler = () => {
    navigate("/order");
  };

  return (
    <div className="cart__cont">
      <div className="flex-vc-hl">
        <div className="pd-r-10 text-xl-d">
          <FaShoppingCart />
        </div>
        <h2 className="text-xxl">Cart</h2>
      </div>

      {cartitems.length ? (
        <div>
          <p className="text-xs"> {`${cartitems.length} Items`}</p>
          {cartitems.map((item, index) => (
            <div className="cart__item text-s" key={index + (index + 1)}>
              <div className={`cart__item_foodtag__${item.type}`}>
                <BiFoodTag />
              </div>
              <div className="cart__item-name"> {item.name} </div>
              <div className="cart__item-quantity"> {item.quantity} </div>
              <div className="cart__item-price"> {(parseInt(item.price) * item.quantity)} </div>
            </div>
          ))}

          <div className="cart__total">
            <div className="cart__total-tag"> SubTotal </div>
            <div className="cart__total-val"> {cartTotal} </div>
          </div>
          <div className="cart__disclaimer">Extra charges may apply</div>
          <div className="cart__checkout">
            <button className="button-A" onClick={checkoutHandler}>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-vc-hl"> No Iterm Selected Yet </div>
      )}
    </div>
  );
};

export default Cart;
