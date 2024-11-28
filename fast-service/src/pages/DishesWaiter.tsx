import React from "react";
import Header from "../components/general/header/Header";
import Footer from "../components/general/footer/Footer";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import Grid from "../components/general/menu-grid/Grid";
import ActionButtons from "../components/general/buttons/ActionButtons"; // Importa el nuevo componente de botones
import { useDishContext } from "./DishContext";
import { useParams } from "react-router-dom";

function DishesWaiter() {
  const { addDish } = useDishContext();
  const { id } = useParams();
  const { table } = useParams();

  const dishes = [
    { title: "Burguer1", image: "/img/burguer1.jpg" },
    { title: "Burguer2", image: "/img/burguer1.jpg" },
    { title: "Burguer3", image: "/img/burguer1.jpg" },
    { title: "Burguer4", image: "/img/burguer1.jpg" },
  ];

  return (
    <>
      <Header title="Menu" backRoute={`/MenuWaiter/${table}`} />
      {id}
      <Grid>
        {dishes.map((dish) => (
          <HorizontalCard
            key={dish.title}
            title={dish.title}
            image={dish.image}
            onClick={() => addDish(dish)}
          />
        ))}
      </Grid>
      <ActionButtons cancelRoute="/" confirmRoute="/confirmation" />
      <Footer />
    </>
  );
}

export default DishesWaiter;
