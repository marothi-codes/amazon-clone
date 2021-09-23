import React from "react";
// Stylesheet
import "./Product.css";

const roundOff = (number, places) => {
  const x = Math.pow(10, places);
  return Math.round(number * x) / x;
};

const Product = ({ title, image, price, rating }) => {
  const decimalPrice = roundOff(price, 2);

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>

        <p className="product__price">
          <small>R</small>
          <strong>{decimalPrice}</strong>
        </p>

        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />

      <button>Add to Cart</button>
    </div>
  );
};

export default Product;
