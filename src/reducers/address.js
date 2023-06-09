import { ADD_ADDRESS } from "../action/types";

const initialState = {
  fullName: "",
  phoneNumber: "",
  address1: "",
  address2: "",
  city: "",
  pincode: "",
  addresstype: "",
};

const AddressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS:

      return  {...state, ...action.payload };
    default:
      return state;
  }
};

export { AddressReducer };
