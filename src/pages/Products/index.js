import React from "react";
import Product from "./product";
import products from "./productList";
import "./style.scss";

const Products = () => (
  <div className="products full-width margin">
    {products.map((product) => (
      <Product product={product} />
    ))}
  </div>
);

export default Products;
