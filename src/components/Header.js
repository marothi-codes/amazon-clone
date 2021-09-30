import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Link } from "react-router-dom";
import { useStateValue } from "../state/StateProvider";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCart";
import { auth } from "../firebase";

// Stylesheet
import "./Header.css";

const Header = () => {
  const [{ cart, user }] = useStateValue();

  function handleAuthentication() {
    if (user) auth.signOut();
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="The Logo"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" type="search" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/signin"}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              Hello:&nbsp;
              {user ? user.email : "Guest"}
            </span>
            <span className="header__optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">&amp; Orders</span>
        </div>

        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>

        <div className="header__optionBasket">
          <Link to="/checkout">
            <ShoppingCartOutlinedIcon />
            <span className="header__optionLineTwo header__BasketCount">
              {cart?.length}
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
