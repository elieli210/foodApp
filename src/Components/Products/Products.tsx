// React
import React from "react";
// React
// Models
import { I_Product } from "../../Models/interfaces";
// Models
// Components
import ProductCard from "../ProductCard/ProductCard";
// Components

type ProductsProps = {
  products: I_Product[];
  onIncrementHandler: Function;
  onDecrementHandler: Function;
};
const Products: React.FunctionComponent<ProductsProps> = ({
  onDecrementHandler,
  onIncrementHandler,
  products,
}) => {
  return (
    <div>
      {products.map((item, index) => (
        <ProductCard
          data={item}
          key={item.id}
          onIncrementHandler={onIncrementHandler}
          onDecrementHandler={onDecrementHandler}
          className={index === 0 ? "mt-5" : "mt-3"}
        />
      ))}
    </div>
  );
};

export default Products;
