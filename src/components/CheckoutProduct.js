import React from "react";
import { useStateValue } from "../state/StateProvider";

// Stylesheet
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, price, title, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt={title} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>R</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
