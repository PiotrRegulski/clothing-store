import { Fragment } from "react";
import Header from "./components/Layout/Header";
import Clothes from "./components/Clothes/Clothes";

function App() {
  return (
    <Fragment>
    <Header />
    <main>
    <Clothes />
    </main>
    </Fragment>
  );
}

export default App;
