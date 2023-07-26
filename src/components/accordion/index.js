import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import classNames from "classnames";
import { GiCheckMark } from "react-icons/gi";

const Accordian = ({
  number = 1,
  heading = "this is heading",
  children = "these are the child contnets",
  showChevron = true,
  defaultExpend = false,
  isDisabled = false,
  isCompleted = false,
  onCompleteContent
}) => {
  const [expend, setExpend] = useState(false);

  useEffect(() => {
    setExpend(defaultExpend);
  }, [defaultExpend]);

  const handleIconClick = () => {
    if (!isDisabled) {
      setExpend(!expend);
    } else {
      return;
    }
  };

  return (
    <div className="accordion-container bg-white">
      {!isCompleted &&
      <div
        className={classNames(
          "py-2 px-4 text-lg",
          isDisabled ? "bg-white-100 text-gray-600" : "bg-blue-500 text-white"
        )}
        onClick={handleIconClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <div
              className={classNames(
                "mr-3 px-2 text-sm",
                isDisabled
                  ? "bg-gray-200 text-blue-500"
                  : "bg-white text-blue-500"
              )}
            >
              {number}
            </div>
            <div className="uppercase text-base">{heading}</div>
          </div>

          <div className="chevron-container">
            {showChevron && !isDisabled && (
              <div className="">
                {expend ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            )}
          </div>
        </div>
      </div>
      }
      {expend && !isDisabled && !isCompleted && (
        <div className="w-full min-h-[400px] border">
          <div>{children}</div>
        </div>
      )}
      {isCompleted && <div className="completed-section border">
        <div className="flex justify-between p-4">
          <div className="flex flex-row">
            <div className="">
              <div className="bg-gray-200 px-2 text-blue-400 mr-2"> {number} </div>
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
      </div>}
    </div>
  );
};

export default Accordian;
