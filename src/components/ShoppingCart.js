import React from "react";

// Components
import Subtotal from "./Subtotal";
import ShoppingCartProduct from "./ShppingCartProduct";

// Stylesheet
import "./ShoppingCart.css";
import { useStateValue } from "../state/StateProvider";

const ShoppingCart = () => {
  const [{ cart, user }] = useStateValue();
  return (
    <div className="shoppingCart">
      <div className="shoppingCart__left">
        <img
          className="shoppingCart__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Amazon Ad"
        />

        <div>
          <h3>Hello {user ? user.email : "friend..."}</h3>
          <h2 className="shoppingCart__title">...Here's Your Shopping Cart</h2>

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

      <div className="shoppingCart__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default ShoppingCart;
