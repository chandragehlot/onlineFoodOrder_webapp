import React from "react";
import { AccordionHead, AccordionBody, ICON } from "./style";
import { useState } from "react";

const Accordion = ({ children, heading }) => {
  const [toggle, setToggle] = useState(true);
  const HandleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <AccordionHead onClick={HandleToggle}>
        <div>{heading}</div>
        <div>{toggle ? <ICON> + </ICON> : <ICON> -</ICON>}</div>
      </AccordionHead>
      { !toggle &&
      <AccordionBody>
          {children}
      </AccordionBody>}
    </>
  );
};

export default Accordion;
