import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p>{name}</p>
        <p>Price: ${price}</p>
        <p>
          <small>Seller: {seller}</small>
        </p>
        <p>
          <small>Ratings: {ratings} stars</small>
        </p>
      </div>
      <button>
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Product;
