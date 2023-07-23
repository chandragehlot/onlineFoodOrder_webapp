import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import classNames from 'classnames';

const Accordian = ({
  number = 1,
  heading = "this is heading",
  children = "these are the child contnets",
  showChevron = true,
  defaultExpend = false,
  isDisabled = false
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
      <div
        className={classNames('py-2 px-4 text-lg',  isDisabled ? 'bg-white-100 text-gray-600': 'bg-blue-500 text-white' )}
        onClick={handleIconClick}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-center">
            <div className={ classNames('mr-3 px-2 text-sm', isDisabled ? 'bg-gray-200 text-blue-500' : 'bg-white text-blue-500')}>{number}</div>
            <div className="uppercase text-base">{heading}</div>
          </div>
          <div>
            {showChevron && !isDisabled && (
              <div className="">
                {expend ? <BsChevronUp /> : <BsChevronDown />}
              </div>
            )}
          </div>
        </div>
      </div>
      {expend && !isDisabled && (
        <div className="w-full min-h-[400px] border-2">
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Accordian;
