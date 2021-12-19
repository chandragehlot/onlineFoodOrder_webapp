import React from "react";
import { ProductsListWithSearch } from "./ProductWithSearch";
import { CarList } from "./CarsList";

const TutorialPage = () => {
  return (
    <div style={{ width: "80%", margin: 'auto'}}>
      <div>
        <ProductsListWithSearch />
        <CarList />
      </div>
    </div>
  );
};

export default TutorialPage;
