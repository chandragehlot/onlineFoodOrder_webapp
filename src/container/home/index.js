import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { retrievePosts } from "../../action/post.action";
// import PostTable from "../../components/post-table";
import Loading from "../../components/loading";
import Banner from "../../components/banner";
import MenuCategory from "../../components/menu-category";

const HomeContainer = (props) => {
//   const postData = useSelector((state) => state.postData);
  const dispatch = useDispatch();

  useEffect(() => {
    
  }, [dispatch, props]);

  const isLoading = false;
  return (
    <div className="foodorder-app">
      {isLoading ? (
        <Loading></Loading>
      ) : (
        <div className="foodorder-container">
          <Banner></Banner>
          <h3 className="sub-heading"> Categories </h3>
          <MenuCategory></MenuCategory>
        </div>
      )}
    </div>
  );
};

export default HomeContainer;
