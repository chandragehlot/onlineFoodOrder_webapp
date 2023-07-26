import React, { useEffect, useState } from "react";
import classNames from "classnames";


const Card3 = ({ addressList = [], partialCount = 0, showPartial = false, handleDeliverHere = ()=>{} }) => {
  const [initialAddress, setInitialAddress] = useState([]);
  const [additionalAddress, setAdditionalAddress] = useState([]);
  const [showAdditional, setHideAdditional] = useState(false);
  const [allAddressCount, setAllAddressCount] = useState(0);
  const [deliveryAddressId, setDeliveryAddressId] = useState(null);

  useEffect(() => {
    const x = addressList.find(item => item.isDefault === true) || {};
    setDeliveryAddressId(x.id);
    if (showPartial) {
      const initialLength =
        partialCount > 0 ? partialCount : addressList.length;
      setAllAddressCount(addressList.length);
      setInitialAddress(addressList.splice(0, initialLength));
      setAdditionalAddress([...addressList]);
    } else {
      setInitialAddress(addressList);
      setAllAddressCount(addressList.length);
    }
  }, [partialCount, addressList, showPartial]);

  const onSelectAddress = (itemId) => {
    setDeliveryAddressId(itemId)
  }

  return (
    <>
      {" "}
      <div>
        {initialAddress?.map((item, index) => RenderCardItem(item, index, deliveryAddressId, onSelectAddress, handleDeliverHere))}
      </div>
      {showPartial && (
        <>
          {!showAdditional && (
            <div
              className="flex flex-row px-4 py-5"
              onClick={() => setHideAdditional(!showAdditional)}
            >
              <div className="px-4 flex items-center text-blue-500 font-bold">
                {" "}
                ^{" "}
              </div>
              <div className="flex items-center font-bold text-blue-500">
                view all {allAddressCount} address
              </div>
            </div>
          )}
          <div>
            {showAdditional &&
              additionalAddress?.map((item, index) =>
                RenderCardItem(item, index, deliveryAddressId, onSelectAddress, handleDeliverHere)
              )}
          </div>
        </>
      )}
    </>
  );
};

const RenderCardItem = (item, index, deliveryAddressId, onSelectAddress, handleDeliverHere) => {
  return (
    <div
      key={index + "10"}
      className={classNames("border-b-2", { "bg-sky-100": (item.id === deliveryAddressId) })}
    >
      <div className="flex flex-row px-4 py-5 justify-between">
        <div className="flex flew-row">
          <div className="px-4">
            <input
              type="radio"
              id={item.fullName}
              name={"deliveryAddress"}
              defaultValue={item.id}
              className="h-4 w-4"
              defaultChecked = {item.id === deliveryAddressId}
              onChange={() => onSelectAddress(item.id)}
            />
          </div>
          <div className="">
            <div className="">
              <label htmlFor={item.fullName}>
                <div className="pb-3 font-bold text-lg leading-none text-gray-500">
                  <span className="pr-2">{item.fullName}</span>
                  <span className="px-2">{item.phoneNumber}</span>
                </div>
                <div className="text-base text-gray-400 break-words">{item.address1}, {item.address2}, {item.city} Pin - {item.pincode}</div>
              </label>
            </div>

            <div className="p-1 bg-gray-300 text-gray-500 w-20">
              {item.addresstype}
            </div>
            {item.id === deliveryAddressId && 
            <div className="w-60 pt-7">
              <button type="button" className="button-D" onClick={()=> handleDeliverHere(item)}>
                DELIVER HERE
              </button>
            </div> }
          </div>
        </div>
        <div className="text-blue-500 font-bold">EDIT</div>
      </div>
    </div>
  );
};

export default Card3;
