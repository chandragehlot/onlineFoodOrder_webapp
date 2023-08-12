import React from "react";

import classNames from "classnames";
import { GiCheckMark } from "react-icons/gi";

/* 
* This component has 3 states
initial - show number, heading as disabled and collasped state
active - Expended state of card with active header
completed - show completion data and collasped state 
*/

const OrderCard = ({
  number = 1,
  heading = "this is heading",
  children = "these are the child contnets",
  cardState = "initial",
  onCompleteContent = <></>,
}) => {
  return (
    <div className="accordion-container bg-white">
      {cardState !== "completed" &&
        getHeaderSection(number, heading, cardState)}
      {cardState === "completed" &&
        onCompleteSection(number, heading, onCompleteContent)}
      {cardState === "active" && <div>{children}</div>}
    </div>
  );
};

function getHeaderSection(number, heading, cardState) {
  return (
    <div
      className={classNames(
        "py-2 px-4 text-lg",
        cardState === "initial"
          ? "bg-white-100 text-gray-600"
          : "bg-blue-500 text-white"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-center">
          <div
            className={classNames(
              "mr-3 px-2 text-sm",
              cardState === "initial"
                ? "bg-gray-200 text-blue-500"
                : "bg-white text-blue-500"
            )}
          >
            {number}
          </div>
          <div className="uppercase text-base">{heading}</div>
        </div>
      </div>
    </div>
  );
}

function onCompleteSection(number, heading, onCompleteContent) {
  return (
    <div className="completed-section border">
      <div className="flex justify-between p-4">
        <div className="flex flex-row">
          <div className="">
            <div className="bg-gray-200 px-2 text-blue-400 mr-2">
              {" "}
              {number}{" "}
            </div>
          </div>
          <div className="pl-4">
            <div className="flex flex-row">
              <div className="mr-2 uppercase text-base">{heading} </div>
              <div className="text-blue-400">
                <GiCheckMark />
              </div>
            </div>
            <div className="text-base text-gray-500 break-words">
              {onCompleteContent}
            </div>
          </div>
        </div>
        <div>
          <button className="button-E"> CHANGE </button>
        </div>
      </div>
    </div>
  );
}

export default OrderCard;
