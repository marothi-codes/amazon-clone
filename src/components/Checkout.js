import React from "react";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import ShoppingCartProduct from "./ShppingCartProduct";

// Stylesheet.
import "./Checkout.css";

/**
 * Renders the Checkout component.
 * @returns JSX
 */
const Checkout = () => {
  const [{ cart, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__container">
        <h1>
          Checkout (<Link to="/shoppingcart">{cart.length} items.</Link>)
        </h1>
        <div className="checkout__section">
          <div className="checkout__title">
            <h3>Delivery Address</h3>
          </div>

          <div className="checkout__address">
            <p>{user?.email}</p>

            <address>
              0000 React Boulevard
              <br />
              Midrand
              <br />
              Johannesburg
              <br />
              0000
              <br />
              Gauteng, South Africa
            </address>
          </div>
        </div>
        <div className="checkout__section">
          <div className="checkout__title">
            <h3>Review items and delivery address</h3>
          </div>

          <div className="checkout__items">
            {cart.map((item) => (
              <ShoppingCartProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                key={item.id}
              />
            ))}
          </div>
        </div>
        <div className="checkout__section">
          <div className="checkout__title"></div>
          <div className="checkout__details"></div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
