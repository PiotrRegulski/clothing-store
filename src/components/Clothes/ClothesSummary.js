import classes from "./ClothesSummary.module.css";


const ClothesSummary = () => {
  return (
    <section className={classes.summary}>
      <h1>Czekamy na Twoje zamówienie.</h1>
      <p>Wybierz produktu które Ci sie podobają</p>
      <p>
        Wszystkie produkty są najwyższej jakośći przygotwane przez naszych
        stylistów
      </p>
    </section>
  );
};

export default ClothesSummary;
