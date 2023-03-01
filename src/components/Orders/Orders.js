import React from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProducts";
import Cart from "../Cart/Cart";

const Orders = () => {
  const [products, setProducts] = useProduct();
  const [cart, setCart] = useCart(products);
  return (
    <div className="cart-container">
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Orders;
