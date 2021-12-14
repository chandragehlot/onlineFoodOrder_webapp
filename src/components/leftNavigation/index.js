import React from "react";
import { useSelector } from "react-redux";
import { setCategroy } from "../../action/category.action";
import { useDispatch } from "react-redux";

const LeftNaigation = () => {
  const { categoryitems, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const dispatch  = useDispatch();

  const onclickNavItem = (category) => {
    dispatch(setCategroy(category));
  };
  return (
    <div className="navigation__cont">
      {categoryitems.length &&
        categoryitems.map((categoryitem, index) => (
          <div
            onClick={() => onclickNavItem(categoryitem.category)}
            key={`${categoryitem.category}-${index}`}
            className={`navigation__item ${categoryitem.category === selectedCategory ? 'highlight' : ''}`}
          >
            {categoryitem.category}
          </div>
        ))}
    </div>
  );
};

export default LeftNaigation;