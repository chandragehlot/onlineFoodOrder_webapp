import facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import LinkedIn from "../assets/linkedin.svg";
import Share from "../assets/share.svg";
import Twitter from "../assets/twitter.svg";

const getIcons = (iconKey) => {
  switch (iconKey) {
    case "facebook":
      return facebook;
    case "instagram" || 'instagram_graph':
      return Instagram;
    case "linkedin":
      return LinkedIn;
    case "twitter":
      return Twitter;
      default:
      return Share;
  }
};

// const getCartItems = ({ cartitems = [], carttotal }, newItem) => {
//   // check if item already exist  
//   const foundIndex = cartitems.findIndex((item)=>item.id === newItem.id);
//   if(foundIndex >= 0){
//     cartitems.splice(foundIndex,1, newItem);
//     return {
//       cartitems: cartitems,
//       carttotal: calculateCartTotal(cartitems)
//     }
//   } else {
//     const updatedcartitems = [
//       ...cartitems,
//       newItem ];
//     return {
//       cartitems: updatedcartitems,
//       carttotal: calculateCartTotal(updatedcartitems)
//     }
//   }
// }

// function calculateCartTotal(itemArr=[]) {
//   const total = itemArr.reduce((total,item) => {
//     return total + item.item_total_price
//   },0);
//   return total;
// }

const checkIfMenuItemsExist = (menuitemsCont, categ) => {
  const existingCateg = Object.keys(menuitemsCont);
  return (existingCateg.length === 0 || !existingCateg.includes(categ)) ? false : true;
}

const updateMenuItemQuantity = (currentMenuItems, newMenuItem, updateType) => {
  const updateMenu = currentMenuItems.map((item) => {
    if (item.id === newMenuItem.id) {
       if(updateType === "increase"){
        return { ...item, quantity: item.quantity + 1 } 
       } else if (updateType === 'descrease'){
        return { ...item, quantity: (item.quantity > 0) ? (item.quantity) -1 : item.quantity}
       }
    } else {
      return item;
    }
  });

  return updateMenu;
}

const UpdateItemInCart = (cartitems = [], menuitem, updateType) => {
  let updateNewItem;
  if(updateType === 'increase'){
    updateNewItem = {...menuitem, quantity: menuitem.quantity+1};
  } else if(updateType === 'decrease'){
    updateNewItem = {...menuitem, quantity: (menuitem.quantity > 0) ? (menuitem.quantity)-1 : menuitem.quantity};
  }

  const foundIndex = cartitems.findIndex((item)=>item.id === menuitem.id);
  if(foundIndex >= 0){
    cartitems.splice(foundIndex,1, updateNewItem);
    return {
      cartitems: cartitems
    }
  } else {
    const updatedcartitems = [...cartitems, updateNewItem];
    return {
      cartitems: updatedcartitems
    }
  }
}

const calculateCartTotal = (cartitems) => {
  const cartTotal = cartitems.length && cartitems.reduce((accumulator, currentMenuItem) => {
    const {price, quantity} = currentMenuItem;
    const totalPerItemPrice = parseInt(price) * quantity;
    return accumulator + totalPerItemPrice;
  }, 0);
  return cartTotal;
}

export { getIcons, checkIfMenuItemsExist, updateMenuItemQuantity, UpdateItemInCart, calculateCartTotal };
