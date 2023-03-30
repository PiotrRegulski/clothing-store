import classes from "./ClothesItem.module.css";

const ClothesItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classes.cloth} >
      <div> 
        <h3>{props.nameCloth}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
        <img src={props.Image} alt={props.textAlt} />
      </div>
      <div>
        
      </div>
    </li>
  );
};

export default ClothesItem;
