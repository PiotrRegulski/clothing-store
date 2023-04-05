import classes from "./AvailableClothes.module.css";
import Card from "../UI/Card";
import shirtImage from "../../assets/t-shirt.png";
import ClothesItem from "./ClothesItem/ClothesItem";
const DUMMY_CLOTHES = [
  {
    id: "m1",
    name: "T-shirt",
    description: "Przewiewny i czarny",
    price: 22.99,
    img: shirtImage,
  },
  {
    id: "m2",
    name: "Bluza",
    description: "100% bawełna",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Spodnie",
    description: "Amerykańskie jensy",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Sweter",
    description: "Ciepły i wygodny",
    price: 18.99,
  },
];

const AvailableClothes = () => {
  const clothesList = DUMMY_CLOTHES.map((cloth) => (
    <ClothesItem
      id ={cloth.id}
      key={cloth.id}
      nameCloth={cloth.name}
      description={cloth.description}
      price={cloth.price}
      Image={cloth.img}
      textAlt={cloth.name}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{clothesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableClothes;

/* <img src={shirtImage} alt="t-shirt " />
        {cloth.name + cloth.price} */
