import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// import { retrievePosts } from "../../action/post.action";
// import PostTable from "../../components/post-table";
import Loading from "../../components/loading";

const MenuContainer = (props) => {
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
          MenuContainer page
        </div>
      )}
    </div>
  );
};

export default MenuContainer;
