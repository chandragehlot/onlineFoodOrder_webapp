import React, { Suspense, lazy } from "react";
// const CarList = lazy(() => import('./CarsList'));
// const ProductsListWithSearch  = lazy(() => import('./ProductWithSearch'));

import ProductsListWithSearch  from "./ProductWithSearch";
import CarList from "./CarsList";

const TutorialPage = () => {
  return (
    <div style={{ width: "80%", margin: 'auto'}}>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <ProductsListWithSearch />
          <CarList />          
        </Suspense>

      </div>
    </div>
  );
};

export default TutorialPage;
