import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import { useContext } from "react";

import CartContext from "../../store/cart-contex";
const HeaderCardButton = (props) => {
  const CartCtx=useContext(CartContext);

  const NumberOfCartItems=CartCtx.items
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> 3 </span>
    </button>
  );
};

export default HeaderCardButton;
