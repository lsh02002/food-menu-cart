import React, { useContext } from "react";
import { ShopContext } from "../context/shopContext";

export const CartItemCom = (props) => {
  const { id, name, price } = props.data;
  const { cartItems, addToCart, removeFromCart } = useContext(ShopContext);
  return (
    <div className="cart-items">
      <div className="cart-description">
        <p>
          <b>{name}</b>
        </p>
        <p>
          {price} x <input type="text" width="30px" value={cartItems[id]} />
        </p>
      </div>
      <div className="cart-buttons">
        <button onClick={() => addToCart(id)}> + </button>
        <button onClick={() => removeFromCart(id)}> - </button>
      </div>
    </div>
  );
};
