import React from "react";
import { useStateValue } from "../state/StateProvider";

// Stylesheet
import "./Product.css";

/**
 * This function rounds off any number to the specified number of decimal digits.
 * @param {Number} number The number to round off.
 * @param {Number} places The amount of places to round the number off to.
 * @returns
 */
const roundOff = (number, places) => {
  const x = Math.pow(10, places);
  return Math.round(number * x) / x;
};

const Product = ({ id, title, image, price, rating }) => {
  const [{ cart }, dispatch] = useStateValue();
  const decimalPrice = roundOff(price, 2);

  const addToCart = () => {
    // Dispatch the item into the data layer.
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };

  return (
    <div className="product" key={id}>
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
              <p key={i}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt={title} />

      <button onClick={addToCart}>Add to Cart</button>
    </div>
  );
};

export default Product;
