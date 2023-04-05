import { Fragment } from "react";
import HeaderImage from "../../assets/headerPhoto.jpg";
import classes from "./Header.module.css";
import HeaderCardButton from "./HeaderCardButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>TakeClothes</h1>
        <HeaderCardButton  onClick ={props.onShowCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={HeaderImage} alt="clothes hanging on a hanger" />
      </div>
    </Fragment>
  );
};
export default Header;
