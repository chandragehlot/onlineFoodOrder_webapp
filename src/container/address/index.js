import React, { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addNewAddressAction,
  getAddressListAction,
} from "../../action/adress.action";
import {
  ADDRESS1,
  ADDRESS2,
  CITY,
  formReducer,
  FULL_NAME,
  initialFormState,
  PHONE_NUMBER,
  PINCODE,
  RESET_FORM,
} from "./formReducer";

function AddressEntry() {
  const reduxDispatch = useDispatch();

  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const [addAdressSectionFlag, toggleAddAddressSection] = useState(false);
  const { addressList } = useSelector((state) => state.address);

  useEffect(() => {
    reduxDispatch(getAddressListAction());
  }, [reduxDispatch]);

  const handleFormFieldChange = (e, fieldName) => {
    dispatch({
      type: fieldName,
      payload: e.target.value,
    });
  };

  const handleAddressAddSubmit = () => {
    dispatch({
      type: RESET_FORM,
    });
    reduxDispatch(addNewAddressAction(formState));
  };

  const setAddressAsDefault = (address) => {
    reduxDispatch({
      type: "SET_DEFAULT_ADDRESS",
      payload: address,
    });
  };

  return (
    <div
      style={{
        width: "50%",
        margin: "auto",
      }}
    >
      <div className="pd-20">
        <button onClick={() => toggleAddAddressSection(!addAdressSectionFlag)}>
          {" "}
          + Enter New address{" "}
        </button>
      </div>

      {addAdressSectionFlag && (
        <div className="border-space pd-btm-20">
          <form onSubmit={(e) => e.preventDefault()}>
            <br />
            <div>
              Full Name -
              <input
                type="fullName"
                name="fullname"
                id="fullname"
                placeholder="full Name"
                value={formState.fullName}
                onInput={(e) => handleFormFieldChange(e, FULL_NAME)}
              />
            </div>
            <br />
            <div>
              PhoneNumber -
              <input
                type="phoneNumber"
                name="phoneNumber"
                value={formState.phoneNumber}
                onInput={(e) => handleFormFieldChange(e, PHONE_NUMBER)}
              />{" "}
            </div>
            <br />
            <div>
              Address 1 -
              <input
                type="address1"
                name="address1"
                value={formState.address1}
                onInput={(e) => handleFormFieldChange(e, ADDRESS1)}
              />{" "}
            </div>
            <br />
            <div>
              Address2 -
              <input
                type="address2"
                value={formState.address2}
                onInput={(e) => handleFormFieldChange(e, ADDRESS2)}
              />{" "}
            </div>
            <br />
            <div>
              City -
              <input
                type="city"
                value={formState.city}
                onInput={(e) => handleFormFieldChange(e, CITY)}
              />{" "}
            </div>
            <br />
            <div>
              Pin code -
              <input
                type="pincode"
                value={formState.pincode}
                onInput={(e) => handleFormFieldChange(e, PINCODE)}
              />{" "}
            </div>
            <br />

            {/* <label htmlFor="home">
              <input type="radio" name="addresstype" id="home" />
            </label>
    
            <label htmlFor="work">
              <input type="radio" name="addresstype" id="work" />
            </label>
    
            <input type="submit"> Submit </input> */}

            <button type="submit" onClick={handleAddressAddSubmit}>
              {" "}
              Submit{" "}
            </button>
          </form>
        </div>
      )}

      <div className="flex-list-cont">
        {addressList.length > 0 &&
          addressList.map((addressItem) => (
            <div
              key={addressItem.id}
              className="border-space flex-list-item pd-bt-10 mg-t-10"
            >
              <div> FullName : {addressItem.fullName} </div>
              <div> Phone Number : {addressItem.phoneNumber} </div>
              <div> AddressLine 1 : {addressItem.address1} </div>
              <div> AddressLine 2 : {addressItem.address2} </div>
              <div> City : {addressItem.city} </div>
              <div> Pin Code :{addressItem.pincode} </div>
              <div> Address Type :{addressItem.addresstype} </div>
              <div>
                <button className=""
                  onClick={() => setAddressAsDefault(addressItem)}
                > set Address As default </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AddressEntry;
