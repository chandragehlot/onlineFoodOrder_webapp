import apiService from "../services/apiServices";
import {
  ADD_ADDRESS_REQ_ERR,
  ADD_ADDRESS_REQ_START,
  ADD_ADDRESS_REQ_SUCCESS,
  GET_ADDRESS_REQ_START,
  GET_ADDRESS_REQ_ERR,
  GET_ADDRESS_REQ_SUCCESS,
} from "./types";

const UserID = 'userId1'

export const addNewAddressAction = (address) => async (dispatch) => {
  try {
    dispatch({
      type: ADD_ADDRESS_REQ_START,
    });
    console.log('address 5000', address)
    const addressWithUserId = { ...address, username: UserID};
    console.log("addressWithUserId", addressWithUserId);
    const apiResponse = await apiService.addNewAddress(addressWithUserId);
    dispatch({
      type: ADD_ADDRESS_REQ_SUCCESS,
      payload: apiResponse.resData,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: ADD_ADDRESS_REQ_ERR,
    });
  }
};

export const getAddressListAction = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ADDRESS_REQ_START,
    });
    const addressListRes = await apiService.getAddressList();
    dispatch({
      type: GET_ADDRESS_REQ_SUCCESS,
      payload: addressListRes.resData,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: GET_ADDRESS_REQ_ERR,
    });
  }
};
