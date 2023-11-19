import React, { useContext } from "react";
import "./Product.css";
import { ShopContext } from "../context/shopContext";

const Product = (props) => {
  const { id, name, price } = props.data;
  const { cartItems, addToCart } = useContext(ShopContext);

  return (
    <div className="product">
      <div className="product-info">
        <div className="product-name">{name}</div>
        <div className="product-price">{price}</div>
      </div>
      <div className="product-nums">
        <label for="quantity">
          수량:
          <input name="quantity" type="text" value={cartItems[id]} />
        </label>
        <button className="product-add-btn" onClick={() => addToCart(id)}>
          추가하기
        </button>
      </div>
    </div>
  );
};

export default Product;
