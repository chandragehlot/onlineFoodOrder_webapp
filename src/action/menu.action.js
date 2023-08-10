//import ApiService from '../services/apiServices';
import { ADD_TO_CART, UPDATE_MENUITEM_QUANTIFY, REMOVE_FROM_CART } from "./types";

// {
//   courseType: "maincourse",
//   description: "This is the description placeholder",
//   foodtype: "veg",
//   id: 8,
//   itemImage: 1,
//   mainCategory: "north",
//   name: "paneer masala",
//   price: 200,
//   quantity: 4,
//   rating: 5,
//   IMAGE_MAPPING: {
//       CDN_fileId: null
//       id: 1
//       imagekey: "south"
//       imageurl: "south_wwebkYnGEzQ.jpg?updatedAt=1639146161359"
//   }
//   }

export const getAddToCartAction = (menuitem) => {
  return {
    type: ADD_TO_CART,
    payload: {
      menuitem,
      updateType: 'increase'
    },
  };
};

export const getRemoveFromCartAction = (menuitem) => {
  return {
    type: REMOVE_FROM_CART,
    payload: {
      menuitem,
      updateType: 'decrease'
    }
  };
};

export const getUpdateMenuItemAction = (menuitem, selectedCategory, updatetype) => {
  return {
    type: UPDATE_MENUITEM_QUANTIFY,
    payload: {
      menuitem,
      selectedCategory,
      updateType: updatetype
    }
  };
};
