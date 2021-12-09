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

const getCartItems = ({ cartitems = [] }, newItem) => {
  // check if item already exist  
  const foundIndex = cartitems.findIndex((item)=>item.id === newItem.id);
  if(foundIndex >= 0){
    cartitems.splice(foundIndex,1, newItem);
    return {
      cartitems: cartitems
    }
  } else {
    return {
      cartitems : [
      ...cartitems,
      newItem ]
    }
  }
}

export { getIcons, getCartItems };
