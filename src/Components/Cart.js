import React, { useContext } from "react";
import "./Cart.css";
import { PRODUCTS } from "../data";
import { ShopContext } from "../context/shopContext";
import { CartItemCom } from "./CartItemCom";
//import Product from "./Product";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  const totalPrice = () => {
    let total = 0;

    for (let i = 0; i < PRODUCTS.length; i++) {
      total += cartItems[i + 1] * PRODUCTS[i].price;
    }

    return total;
  };

  return (
    <div className="main-cart">
      <div>장바구니 아이템</div>
      <div className="main-cart-items"></div>
      {PRODUCTS.map((product) => {
        if (cartItems[product.id] !== 0) {
          return <CartItemCom data={product} />;
        } else {
          return (
            <p>
              <h2>{product.name} 가 다 떨어졌습니다!</h2>
            </p>
          );
        }
      })}
      <div className="main-cart-price">전체 금액: {totalPrice()}</div>
    </div>
  );
};

export default Cart;
