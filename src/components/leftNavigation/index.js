import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

const LeftNaigation = (props) => {
  const { categoryitems, selectedCategory } = useSelector(
    (state) => state.categories
  );
  const [selCategory, setSelCategory] = useState(selectedCategory);

  const onclickNavItem = (category) => {
    setSelCategory(category);
    props.onSelectCategory(category);
  };
  return (
    <div className="navigation__cont">
      {categoryitems.length &&
        categoryitems.map((categoryitem, index) => (
          <div
            onClick={() => onclickNavItem(categoryitem)}
            key={`${categoryitem}-${index}`}
            className={`navigation_item ${categoryitem === selCategory ? 'highlight' : ''}`}
          >
            {categoryitem}
          </div>
        ))}
    </div>
  );
};

export default LeftNaigation;