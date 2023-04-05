import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Clothes from "./components/Clothes/Clothes";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Fragment>
      {cartIsShown && <Cart onCloseCart={hideCartHandler}/>}
      <Header onShowCart={showCartHandler}/>
      <main>
        <Clothes />
      </main>
    </Fragment>
  );
}

export default App;
