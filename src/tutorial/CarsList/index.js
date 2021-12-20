import React from "react";
import { Cars } from "../fake-data";
import Accordion from "../Accordion";


const Card = (props) => {
  const { title } = props;
  return (
      <Accordion heading={title}>
        <p>
          <b>Style:</b> {props.style}
        </p>
        <p>
          <b>Price:</b> {props.price}
        </p>
        <p>
          <b>Description:</b> {props.description}
        </p>
        <p>
          <b>Free shipping:</b> {props.isFreeShipping}
        </p>
      </Accordion>
  );
};


const CarList = (props) => {

  return (
    <div>
      <div>
        <div>
          <h2>Cars</h2>
        </div>
      </div>
      <div>
        {Cars.map((car) => (
          <Card key={car.sku} {...car} {...props} />
        ))}
      </div>
    </div>
  );
};


export default CarList;
