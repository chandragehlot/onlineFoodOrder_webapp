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

const getCartItems = ({ cartitems = [], carttotal }, newItem) => {
  // check if item already exist  
  const foundIndex = cartitems.findIndex((item)=>item.id === newItem.id);
  if(foundIndex >= 0){
    cartitems.splice(foundIndex,1, newItem);
    return {
      cartitems: cartitems,
      carttotal: calculateCartTotal(cartitems)
    }
  } else {
    const updatedcartitems = [
      ...cartitems,
      newItem ];
    return {
      cartitems: updatedcartitems,
      carttotal: calculateCartTotal(updatedcartitems)
    }
  }
}

function calculateCartTotal(itemArr=[]) {
  const total = itemArr.reduce((total,item) => {
    return total + item.item_total_price
  },0);
  return total;
}

export { getIcons, getCartItems };
