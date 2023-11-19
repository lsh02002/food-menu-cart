import React from "react";
import "./Shop.css";
import Product from "./Product";
import { PRODUCTS } from "../data";

const Shop = () => {
  return (
    <div className="main-shop">
      {PRODUCTS.map((product) => (
        <Product data={product} />
      ))}
    </div>
  );
};

export default Shop;
