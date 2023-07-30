import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Loading from "../../components/loading";
import Banner from "../../components/banner";
import MenuCategory from "../../components/category";
import { retrieveCategories } from "../../action/category.action";
import { config, getImageUrl } from "../../config";
import { setCategroyRedirectToMenu } from "../../action/category.action";

const HomeContainer = (props) => {
  const banner_img_key = config.BANNER_IMAGE_KEY;
  const navigate = useNavigate();
  const { categoryitems = [], isLoading = false } = useSelector(
    (state) => state.categories
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(retrieveCategories(props));
  }, [dispatch, props]);

  const onSelectCategroy = (category) => {
    dispatch(setCategroyRedirectToMenu(navigate, category));
  };

  return (
    <div className="foodorder-app">
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="foodorder-container">
          <Banner src={getImageUrl(banner_img_key)}></Banner>
          <h3 className="sub-heading"> Categories </h3>
          <MenuCategory
            categories={categoryitems}
            onSelectCategroy={onSelectCategroy}
          ></MenuCategory>
        </div>
      )}
    </div>
  );
};

export default HomeContainer;
