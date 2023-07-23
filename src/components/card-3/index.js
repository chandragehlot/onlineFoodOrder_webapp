import React, { useEffect, useState } from "react";
import classNames from "classnames";

const RenderCardItem = (item, index) => {
  return (
    <div
      key={index + "10"}
      className={classNames("border-b-2", { "bg-sky-100": item.isDefault })}
    >
      <div className="flex flex-row px-4 py-5 justify-between">
        <div className="flex flew-row">
          <div className="px-4">
            <input
              type="radio"
              id={item.username}
              name={item.username}
              value={""}
              className="h-4 w-4"
            />
          </div>
          <div className="">
            <div className="">
              <label htmlFor={item.username}>
                <div className="pb-3 font-semibold text-lg leading-none">
                  <span className="pr-2">{item.username}</span>
                  <span className="px-2">{item.phoneNo}</span>
                </div>
                <div className="text-base break-words">{item.address}</div>
              </label>
            </div>

            <div className="w-60 pt-7">
              <button type="button" className="button-D">
                DELIVER HERE
              </button>
            </div>
          </div>
        </div>
        <div className="text-blue-500 font-bold">EDIT</div>
      </div>
    </div>
  );
};

const Card3 = ({ addressList = [], partialCount = 0, showPartial = false }) => {
  const [initialAddress, setInitialAddress] = useState([]);
  const [additionalAddress, setAdditionalAddress] = useState([]);
  const [showAdditional, setHideAdditional] = useState(false);
  const [allAddressCount, setAllAddressCount] = useState(0);

  useEffect(() => {
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
  return (
    <>
      {" "}
      <div>
        {initialAddress?.map((item, index) => RenderCardItem(item, index))}
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
                RenderCardItem(item, index)
              )}
          </div>
        </>
      )}
    </>
  );
};

export default Card3;
