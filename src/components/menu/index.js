import React from "react";

const MenuItem = (props) => {
  console.log("props", props);
  const { menuitems } = props;

  return (
    <div className="menuitem__cont">
      {menuitems.length &&
        menuitems.map((menuitem) => (
          <div key={`${menuitem.id}`} className="menuitem__card">
            <div className="menuitem__left-sec">
              <div className="menuitem__row">
                <div className="menuitem__foodtype-icon">{menuitem.type}</div>
                <div className="menuitem__rating">4 star</div>
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
                <div className="menuitem__quantity">-</div>
                <div className="menuitem__quantity">1</div>
                <div className="menuitem__quantity">+</div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MenuItem;
