import { useContext } from "react";
import CartContext from "../../../store/cart-contex";
import classes from "./ClothesItem.module.css";
import ClothesItemForm from "./ClothesItemForm";
const ClothesItem = (props) => {
  const cartCtx = useContext(CartContext);
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.nameCloth,
      amount: amount,
      price: props.price,
    });
  };
  return (
    <li className={classes.cloth}>
      <div>
        <h3>{props.nameCloth}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <img src={props.Image} alt={props.textAlt} />
      </div>
      <div>
        <ClothesItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ClothesItem;
