import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading";
import LeftNaigation from "../../components/leftNavigation";
import MenuItem from "../../components/menu";
import Cart from "../../components/cart";
import { FetchMenu } from "../../action/category.action";
import { setCategroy } from "../../action/category.action";
import { checkIfMenuItemsExist } from "../../utils";
import { getAddToCartAction, getRemoveFromCartAction, getUpdateMenuItemAction } from "../../action/menu.action";

const MenuContainer = (props) => {
  
  const dispatch  = useDispatch();
  const isLoading = false;
  const [menu, setMenu] = useState([]);

  const { categoryitems, selectedCategory } = useSelector(state => state.categories);
  const { menuitemsCont = {} } = useSelector(state => state.menuData);
  const { cartitems } = useSelector(state => state.cart)

  const onclickNavItem = (category) => {
    dispatch(setCategroy(category));
    if(!checkIfMenuItemsExist(menuitemsCont, category)){
      dispatch(FetchMenu(props, category));
    }
  };

  /*
  * This UseEffect is to fetch the menu items for selected category on load of the component
  * It hit the API on changing the value of selectedCategroy
  */

  useEffect(() => {
    if(!checkIfMenuItemsExist(menuitemsCont, selectedCategory)){
      dispatch(FetchMenu(props, selectedCategory));
    }
  },[selectedCategory, dispatch, props, menuitemsCont]);

  /*
  * This useEffect Hit when menuItemsCont update
  */

  useEffect(() => {
    const menuitems =
      Object.keys(menuitemsCont).length > 0 &&
      menuitemsCont[selectedCategory] !== undefined
        ? menuitemsCont[selectedCategory]
        : [];
    setMenu(menuitems);
  }, [menuitemsCont, selectedCategory]);


  const updateQuantityHandler = (action, item) => {
    // add item in the card if not exist
    if(action === 'increase'){
      dispatch(getAddToCartAction(item));
      dispatch(getUpdateMenuItemAction(item, selectedCategory, action));
    }else if (action === 'decrease'){
      dispatch(getRemoveFromCartAction(item));
      dispatch(getUpdateMenuItemAction(item, selectedCategory, action));
    }
    // update/remote cart item if exist
    // Update Quantity of item in MenuItemsCont
    
  }
  
  return (
    <div className="menu-page">
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="menupage__cont d-flex">
          <div className="menupage__navigation-cont">
            <LeftNaigation 
            categoryitems={categoryitems}
            onclickNavItem={onclickNavItem}
            selectedCategory={selectedCategory}
            >
            </LeftNaigation>
          </div>
          <div className="menupage__menu-cont">
            {/* <MenuItem menuitemsCont={menuitemsCont} category = { selectedCategory }></MenuItem> */}
            <MenuItem
              menu={menu}
              updateQuantityHandler={updateQuantityHandler}
            ></MenuItem>
          </div>
          <div className="menupage__cart-cont">
            <Cart cartitems={cartitems}></Cart>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuContainer;
