import React from "react";

const ItemCount = ({ quantity }) => {
  return (
    <>
      <div className="flex flex-row">
        <div className="border-2 h-9 w-9 rounded-3xl flex justify-center items-center">
          {" "}
          <span>-</span>
        </div>
        <div className="border-2 h-9 w-12 rounded flex justify-center items-center mx-3">
          {" "}
          <span>{quantity}</span>{" "}
        </div>
        <div className="border-2 h-9 w-9 rounded-3xl flex justify-center items-center">
          {" "}
          <span>+</span>{" "}
        </div>
      </div>
    </>
  );
};

export default ItemCount;
