import React from "react";
import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { addMenuItemToCartAction } from "../../action/cart.action";
import { FetchMenu } from "../../action/category.action";
import Rating from "../rating";
import { BiFoodTag } from "react-icons/bi";
import { FaRupeeSign } from "react-icons/fa"

const MenuItem = (props) => {
  const [menu, setMenu] = useState([]);
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector(state => state.categories);
  const { menuitemsCont = {} } = useSelector(state => state.menuData);

  const increaseQuantity = (menuitem) => {
    const updatedMenu = menu.map((item) => {
      if (item.id === menuitem.id) {
        item.quantity = item.quantity + 1;
      }
      return item;
    });

    setMenu(updatedMenu);
    dispatch(addMenuItemToCartAction(menuitem));
  };

  const decreaseQuantity = (menuitem) => {
    const updatedMenu = menu.map((item) => {
      if (item.id === menuitem.id) {
        item.quantity = item.quantity > 0 ? item.quantity - 1 : 0;
      }
      return item;
    });
    setMenu(updatedMenu);
  };

  useEffect(() => {
    const menuitems = (Object.keys(menuitemsCont).length > 0 && menuitemsCont[selectedCategory] !== undefined) ? menuitemsCont[selectedCategory] : [];
    const menuWithQuantity = menuitems.map((item) => ({
      ...item,
      quantity: 0,
    }));
    setMenu(menuWithQuantity);
  }, [menuitemsCont, selectedCategory]);

  useEffect(() => {
    // check if cateegory present in menuitemsCont
    const existingCategories = Object.keys(menuitemsCont)
    if(existingCategories.length === 0 || !existingCategories.includes(selectedCategory)){
      dispatch(FetchMenu(props, selectedCategory))
    }else{
      return;
    }
  }, [dispatch, menuitemsCont, props, selectedCategory]);

  return (
    <div className="menuitem__cont">
      {menu.length &&
        menu.map((menuitem) => (
          <div key={`${menuitem.id}`} className="menuitem__card">
            <div className="menuitem__left-sec">
              <div className="menuitem__row">
                <div className={ `menuitem__foodtype-icon_${menuitem.type}`}>
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
                <div> <FaRupeeSign /> </div>
                <div className="font-s">
                   {menuitem.price} </div>
              </div>
            </div>
            <div className="menuitem__right-sec">
              <div className="menuitem__imgcont"></div>
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
          </div> 
        ))}
    </div>
  );
};

export default MenuItem;
