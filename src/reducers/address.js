import {
  ADD_ADDRESS_REQ_ERR,
  ADD_ADDRESS_REQ_START,
  ADD_ADDRESS_REQ_SUCCESS,
  GET_ADDRESS_REQ_ERR,
  GET_ADDRESS_REQ_START,
  GET_ADDRESS_REQ_SUCCESS,
  SET_DEFAULT_ADDRESS,
  SET_DELIVERY_ADDRESS
} from "../action/types";

const initialState = {
  addressList: [
    {
      fullName: "",
      phoneNumber: "",
      address1: "",
      address2: "",
      city: "",
      pincode: "",
      addresstype: "",
      isDefault: false
    },
  ],
  defaultAddress: {},
  isLoading: false,
  isError: false,
  deliveryAddress: {}
};

const addressReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADDRESS_REQ_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADD_ADDRESS_REQ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addressList: [...state.addressList, action.payload],
      };
    case ADD_ADDRESS_REQ_ERR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case GET_ADDRESS_REQ_START:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case GET_ADDRESS_REQ_SUCCESS:
      return {
        ...state,
        isLoading: false,
        addressList: [...action.payload.addressList],
      };
    case GET_ADDRESS_REQ_ERR:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case SET_DEFAULT_ADDRESS:
      return {
        ...state,
        defaultAddress: action.payload,
      };
    case SET_DELIVERY_ADDRESS: 
    return {
      ...state,
      deliveryAddress: action.payload
    }
    default:
      return state;
  }
};

export { addressReducer };
