import React, { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useProduct from "../../hooks/useProducts";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  //   const [products, setProducts] = useState([]);
  /*     const [cart, setCart] = useState([]);
    useEffect(() => {
      fetch("products.json")
        .then((res) => res.json())
        .then((data) => setProducts(data));
    }, []); */

  /*   useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCart(savedCart);
  }, [products]); */
  const [products, setProducts] = useProduct(); // using custom hook
  const [cart, setCart] = useCart(products); // using custom hook
  const handleAddToCart = (selectedProduct) => {
    console.log(selectedProduct); // checking if the add to cart btn is working
    let newCart = [];
    const existedProduct = cart.find(
      (product) => product.id === selectedProduct.id
    );
    if (!existedProduct) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const restProducts = cart.filter(
        (product) => product.id !== selectedProduct.id
      );
      existedProduct.quantity = existedProduct.quantity + 1;
      newCart = [...restProducts, existedProduct];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <h1>Hello from cart</h1>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
