export const FULL_NAME = "FULL_NAME";
export const PHONE_NUMBER = "PHONE_NUMBER";
export const ADDRESS1 = "ADDRESS1";
export const ADDRESS2 = "ADDRESS2 ";
export const CITY = "CITY ";
export const PINCODE = "PINCODE ";
export const ADDRESS_TYPE = "ADDRESS_TYPE";
export const RESET_FORM = "RESET_FORM";

export const initialFormState = {
    fullName: "",
    phoneNumber: "",
    address1: "",
    address2: "",
    city: "",
    pincode: "",
    addresstype: ""
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case FULL_NAME:
      return {
        ...state,
        fullName: action.payload,
      };
    case PHONE_NUMBER:
        return {   ...state,
            phoneNumber: action.payload,
          };

    case ADDRESS1:
        return {
            ...state,
            address1: action.payload,
          };
    case ADDRESS2:
        return {
            ...state,
            address2: action.payload,
          };
    case CITY:
        return {
            ...state,
            city: action.payload,
          };
    case PINCODE:
        return {
            ...state,
            pincode: action.payload,
          };
    case ADDRESS_TYPE:
        return {
            ...state,
            addresstype: action.payload,
          };
          
        case RESET_FORM:
          return {
              ...initialFormState
            };     
    default:
      break;
  }
};