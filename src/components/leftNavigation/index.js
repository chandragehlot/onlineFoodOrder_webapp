import React from "react";

const LeftNaigation = ({ categoryitems, onclickNavItem, selectedCategory }) => {
  return (
    <div className="navigation__cont">
      {categoryitems.length &&
        categoryitems.map((categoryitem, index) => (
          <div
            onClick={() => onclickNavItem(categoryitem.category)}
            key={`${categoryitem.category}-${index}`}
            className={`navigation__item ${
              categoryitem.category === selectedCategory ? "highlight" : ""
            }`}
          >
            {categoryitem.category}
          </div>
        ))}
    </div>
  );
};

export default LeftNaigation;
