import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../components/loading";
import LeftNaigation from "../../components/leftNavigation";
import MenuItem from "../../components/menu";
import Cart from "../../components/cart";
import { FetchMenu } from "../../action/category.action";

const MenuContainer = (props) => {
  
  const dispatch = useDispatch();
  const { selectedCategory } = useSelector(state => state.categories);
  const { menuitemsCont = {} } = useSelector(state => state.menuData);
  
  useEffect(() => {
    // check if cateegory present in menuitemsCont
    const existingCategories = Object.keys(menuitemsCont)
    if(existingCategories.length === 0 || !existingCategories.includes(selectedCategory)){
      dispatch(FetchMenu(props, selectedCategory))
    }else{
      return;
    }
  }, [dispatch, menuitemsCont, props, selectedCategory]);

  const isLoading = false;
  return (
    <div className="menu-page">
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="menupage__cont d-flex">
          <div className="menupage__navigation-cont">
            <LeftNaigation ></LeftNaigation>
          </div>
          <div className="menupage__menu-cont">
            <MenuItem menuitemsCont={menuitemsCont} category = { selectedCategory }></MenuItem>
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
