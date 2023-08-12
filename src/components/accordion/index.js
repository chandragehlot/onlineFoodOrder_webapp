import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

const Accordian = ({
  number = "1",
  heading = "this is heading",
  children = "these are the child contnets",
  defaultExpend = false,
}) => {
  const [expend, setExpend] = useState(false);

  useEffect(() => {
    setExpend(defaultExpend);
  }, [defaultExpend]);

  const handleIconClick = () => {
    setExpend(!expend);
  };

  return (
    <div className="accordion-container bg-white">
      {
        <div
          className="py-2 px-4 text-lg bg-blue-500 text-white"
          onClick={handleIconClick}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-center">
              <div className="mr-3 px-2 text-sm bg-white text-blue-500">
                {number}
              </div>
              <div className="uppercase text-base">{heading}</div>
            </div>

            <div className="chevron-container">
              {expend ? <BsChevronUp /> : <BsChevronDown />}
            </div>
          </div>
        </div>
      }
      {expend && (
        <div className="w-full min-h-[400px] border">
          <div>{children}</div>
        </div>
      )}
    </div>
  );
};

export default Accordian;
