import React , { useEffect  } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/loading";
import Banner from "../../components/banner";
import MenuCategory from "../../components/menu-category";
import Footer from "../../components/footer";
import { retrieveCategories } from "../../action/category.action";

const HomeContainer = (props) => {
  const { 
    categoryitems = [],
    isLoading = false } = useSelector(state => state.categories);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(retrieveCategories(props));
  },[dispatch, props]);

  
  return (
    <div className="foodorder-app">
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="foodorder-container">
          <Banner></Banner>
          <h3 className="sub-heading"> Categories </h3>
          <MenuCategory categories={categoryitems}></MenuCategory>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default HomeContainer;
