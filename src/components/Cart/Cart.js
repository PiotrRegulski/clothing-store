import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
const Cart = (props) => {
  const cartitems = (
    <ul className={classes["cart-items"]}>
      {[{ id: "c1", name: "Spodnie", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal onCloseCart={props.onCloseCart}>
      {cartitems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>39.99</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Anuluj
        </button>
        <button className={classes.button}>Zamów</button>
      </div>
    </Modal>
  );
};

export default Cart;
