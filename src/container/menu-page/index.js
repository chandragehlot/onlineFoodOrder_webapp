import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading";
import LeftNaigation from "../../components/leftNavigation";
import MenuItem from "../../components/menu";
import Cart from "../../components/cart";
import { FetchMenu } from "../../action/category.action";

const MenuContainer = (props) => {
  
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector(state => state.categories);
  const [category, setCategory] = useState(selectedCategory);
  const { menuitems = [] } = useSelector(state => state.menuData);
  
  useEffect(() => {
    dispatch(FetchMenu(props, category))
  }, [category]);

  const isLoading = false;
  return (
    <div className="menu-page">
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="menupage__cont d-flex">
          <div className="menupage__navigation-cont">
            <LeftNaigation onSelectCategory={setCategory}></LeftNaigation>
          </div>
          <div className="menupage__menu-cont">
            <MenuItem menuitems={menuitems}></MenuItem>
          </div>
          <div className="menupage__cart-cont">
            <Cart></Cart>
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuContainer;
