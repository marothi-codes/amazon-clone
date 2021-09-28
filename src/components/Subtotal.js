import React from "react";
import { useStateValue } from "../state/StateProvider";
import CurrencyFormat from "react-currency-format";

import "./Subtotal.css";
import { getCartTotal } from "../redux/reducers/reducer";

const Subtotal = () => {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items):
              <strong>{` ${value}`}</strong>
            </p>

            <small className="subtotal__gift">
              <input type="checkbox" /> This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"R"}
      />

      <button>Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
