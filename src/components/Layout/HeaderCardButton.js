import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
import { useContext } from "react";

import CartContext from "../../store/cart-contex";
const HeaderCardButton = (props) => {
  const CartCtx=useContext(CartContext);

  const numberOfCartItems=CartCtx.items.reduce((curNumber, item)=>{
    return curNumber + item.amount;
  },0)
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}> {numberOfCartItems} </span>
    </button>
  );
};

export default HeaderCardButton;
