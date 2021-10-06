import React from "react";
import { useStateValue } from "../state/StateProvider";
import CurrencyFormat from "react-currency-format";
import { getCartTotal } from "../redux/reducers/reducer";
import { useHistory } from "react-router-dom";

// Stylesheet...
import "./Subtotal.css";

const Subtotal = () => {
  const history = useHistory();
  const [{ cart }] = useStateValue();
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

      <button onClick={(e) => history.push("/checkout")}>
        Proceed to checkout
      </button>
    </div>
  );
};

export default Subtotal;
