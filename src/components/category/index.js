import React from "react";
import { getImageUrl } from "../../config";

const MenuCategory = ({categories, onSelectCategroy}) => {
  return (
    <div className="category__section">
      <div className="category__cont">
        <div className="category__items vh-center">
          {categories.length > 0 &&
            categories.map((item, index) => (
              <div
                key={`${index}-${item.category}`}
                className="category__item"
                onClick={() => onSelectCategroy(item.category)}
              >
                <img
                  className="category__image"
                  src={getImageUrl(item.image_url_key)}
                  alt="categoryitem"
                />
                <div className="category__name">{item.category}</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
