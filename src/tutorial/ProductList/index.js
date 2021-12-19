import React from "react";
import { products } from "../fake-data";
import { ToggleHOC } from "../toogleHOC";
import { AccordionHead,AccordionBody,ICON } from "./style";

const ProductCard = (props) => {
    const { toggle } = props;
  return (
    <div className="product">
      <AccordionHead onClick={()=>props.toggleState()}>
        <div>
          <b>Title:</b> {props.title}
        </div>
        <div>
            { toggle ?  
            <ICON> + </ICON>
            :
            <ICON> -</ICON>
            }
        </div>
      </AccordionHead>

      <AccordionBody toggle={toggle}>
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
      </AccordionBody>
    </div>
  );
};

const ProductAccordion = ToggleHOC(ProductCard)

const ProductsList = (props) => {
  console.log(props);
  const products = filterProducts(props.searchTerm);
  return (
    <div>
      <div>
        <div>
          <h2>Products</h2>
        </div>
      </div>
      <div>
        {products.map((product) => (
          <ProductAccordion key={product.sku} {...product} {...props} />
        ))}
      </div>
    </div>
  );
};

const filterProducts = (searchTerm) => {
  searchTerm = searchTerm.toUpperCase();
  return products.filter((product) => {
    let str = `${product.title} ${product.style} ${product.sku}`.toUpperCase();
    return str.indexOf(searchTerm) >= 0;
  });
};

export { ProductsList };
