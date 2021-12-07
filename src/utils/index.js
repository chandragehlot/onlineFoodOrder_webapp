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

export { getIcons };
