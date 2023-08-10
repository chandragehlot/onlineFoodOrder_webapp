import React from "react";
import Rating from "../rating";
import { BiFoodTag } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa";
import { getImageUrl } from "../../config";

const MenuItem = (props) => {
  const { menu, updateQuantityHandler }= props;

  const increaseQuantity = (menuitem) => {
    updateQuantityHandler('increase', menuitem)
  };

  const decreaseQuantity = (menuitem) => {
    if(menuitem.quantity > 0){
      updateQuantityHandler('decrease', menuitem);
    }
  };

  return (
    <div className="menuitem__cont">
      {menu.length &&
        menu.map((menuitem) => (
          <div key={menuitem.id} className="menuitem__card">
            <div className="menuitem__right-sec">
              <div className="menuitem__imgcont">
                <img
                  className=""
                  src={getImageUrl(menuitem.IMAGE_MAPPING.imageurl)}
                  alt="categoryitem"
                />
              </div>
              <div className="menuitem__quantitySelector">
                <div
                  className="menuitem__quantity"
                  onClick={() => decreaseQuantity(menuitem)}
                >
                  -
                </div>
                <div className="menuitem__quantity">{menuitem.quantity}</div>
                <div
                  className="menuitem__quantity"
                  onClick={() => increaseQuantity(menuitem)}
                >
                  +
                </div>
              </div>
            </div>
            <div className="menuitem__left-sec">
              <div className="menuitem__row">
                <div className={`menuitem__foodtype-icon_${menuitem.type}`}>
                  <BiFoodTag></BiFoodTag>
                </div>
                <div className="menuitem__rating">
                  <Rating rating={menuitem.rating}></Rating>
                </div>
              </div>
              <div className="menuitem__row">
                <div className="font-xxl-d txt-capitalize">{menuitem.name}</div>
              </div>
              <div className="menuitem__row">
                <div>
                  {" "}
                  <FaRupeeSign />{" "}
                </div>
                <div className="font-s">{menuitem.price} </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MenuItem;
