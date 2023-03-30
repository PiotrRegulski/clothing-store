
import { Fragment } from "react";
import ClothesSummary from "./ClothesSummary";
import AvailableClothes from "./AvailableClothes";

const Clothes= ()=>{
    return(
    <Fragment>
        <ClothesSummary />
        <AvailableClothes />
    </Fragment>)

};

export default Clothes;