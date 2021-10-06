import React from "react";
import { useStateValue } from "../state/StateProvider";

// Stylesheet
import "./ShoppingCartProduct.css";

const ShoppingCartProduct = ({ id, image, price, title, rating }) => {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="shoppingCartProduct">
      <img className="shoppingCartProduct__image" src={image} alt={title} />

      <div className="shoppingCartProduct__info">
        <p className="shoppingCartProduct__title">{title}</p>
        <p className="shoppingCartProduct__price">
          <small>R</small>
          <strong>{price}</strong>
        </p>

        <div className="shoppingCartProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from cart</button>
      </div>
    </div>
  );
};

export default ShoppingCartProduct;
