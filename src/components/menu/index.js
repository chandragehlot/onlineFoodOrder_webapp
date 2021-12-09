import React from "react";
import { useState, useLayoutEffect } from "react";


const MenuItem = (props) => {
  const [menu, setMenu] = useState([]);

  const increaseQuantity = (menuitem) => {
    const updatedMenu = menu.map(item => {
      if (item.id === menuitem.id) {
        item.quantity = item.quantity +1;
      }
      return item;
    })
    setMenu(updatedMenu)
  }

  const decreaseQuantity = (menuitem) => {
    const updatedMenu = menu.map(item => {
      if (item.id === menuitem.id) {
        item.quantity = (item.quantity > 1) ? item.quantity - 1 : 1;
      }
      return item;
    })
    setMenu(updatedMenu)    
  }

  useLayoutEffect(()=>{
    const menu1 = props.menuitems.map(item=>({...item, quantity: 1}))
    setMenu(menu1);
  },[props]);

  return (
    <div className="menuitem__cont">
      {menu.length &&
        menu.map((menuitem) => (
          <div key={`${menuitem.id}`} className="menuitem__card">
            <div className="menuitem__left-sec">
              <div className="menuitem__row">
                <div className="menuitem__foodtype-icon">{menuitem.type }</div>
                <div className="menuitem__rating"> {' '} {menuitem.rating} {'star'}</div>
              </div>
              <div className="menuitem__row">
                <div className="font-l">{menuitem.name}</div>
              </div>
              <div className="menuitem__row">
                <div className="font-s"> {menuitem.price} </div>
              </div>
            </div>
            <div className="menuitem__right-sec">
              <div className="menuitem__imgcont"></div>
              <div className="menuitem__quantitySelector">
                <div className="menuitem__quantity" onClick={()=>decreaseQuantity(menuitem)}>-</div>
                <div className="menuitem__quantity">{menuitem.quantity}</div>
                <div className="menuitem__quantity" onClick={()=>increaseQuantity(menuitem)}>+</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MenuItem;