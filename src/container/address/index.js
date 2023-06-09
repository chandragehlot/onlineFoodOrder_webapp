import React from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { ADD_ADDRESS } from "../../action/types";
import { ADDRESS1, ADDRESS2, CITY, formReducer, FULL_NAME, initialFormState, PHONE_NUMBER, PINCODE } from "./formReducer";


const addressList = [
    {
      fullName: "",
      phoneNumber: "",
      address1: "",
      address2: "",
      city: "",
      pincode: "",
      addresstype: "",
    },
  ];
  
function AddressEntry() {


  const [formState, dispatch] = useReducer(formReducer, initialFormState);
  const reduxDispatch = useDispatch();

  useEffect(()=>{
    console.log("form State", formState);
  },[formState])

  const handleFormFieldChange = (e, fieldName) => {
    dispatch({
        type: fieldName,
        payload: e.target.value,
      });
  };

  const handleAddressAddSubmit = () => {
    reduxDispatch({
        type: ADD_ADDRESS,
        payload: formState
    })
  }

  return (
    <div>
      <div>
        <button> + Enter New address </button>
      </div>
      <div>
        <br />
        <div>
          Full Name -
          <input
            type="fullName"
            name="fullname"
            id="fullname"
            placeholder="full Name"
            onInput={(e) => handleFormFieldChange(e, FULL_NAME)}
          />
        </div>
        <br />
        <div>
          PhoneNumber -
          <input
            type="phoneNumber"
            name="phoneNumber"
            onInput={(e) => handleFormFieldChange(e, PHONE_NUMBER)}
          />{" "}
        </div>
        <br />
        <div>
          Address 1 -
          <input type="address1" name="address1" 
          onInput={(e) => handleFormFieldChange(e, ADDRESS1)}
          />{" "}
        </div>
        <br />
        <div>
          Address2 -
          <input type="address2" onInput={(e) => handleFormFieldChange(e, ADDRESS2)} />{" "}
        </div>
        <br />
        <div>
          City -
          <input type="city" onInput={(e) => handleFormFieldChange(e, CITY)} />{" "}
        </div>
        <br />
        <div>
          Pin code -
          <input type="pincode" onInput={(e) => handleFormFieldChange(e, PINCODE)} />{" "}
        </div>
        <br />

        {/* <label htmlFor="home">
          <input type="radio" name="addresstype" id="home" />
        </label>

        <label htmlFor="work">
          <input type="radio" name="addresstype" id="work" />
        </label>

        <input type="submit"> Submit </input> */}

        <button type="submit" onClick={handleAddressAddSubmit}> Submit </button>
      </div>

      <div className="addresslist">
        {addressList.length > 0 &&
          addressList.map((addressItem) => (
            <div key={addressItem.fullName}>
              <p>{addressItem.fullName}</p>
              <p>{addressItem.phoneNumber}</p>
              <p>{addressItem.address1}</p>
              <p>{addressItem.address2}</p>
              <p>{addressItem.city}</p>
              <p>{addressItem.pincode}</p>
              <p>{addressItem.addresstype}</p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default AddressEntry;
