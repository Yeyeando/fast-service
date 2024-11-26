import React from "react";
import Grid from "../components/general/menu-grid/Grid";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import { useDishContext } from "./DishContext";
import Header from "../components/general/header/Header";
import Footer from "../components/general/footer/Footer";

function Confirmation() {
  const { selectedDishes } = useDishContext(); // Obtenemos los platos seleccionados del contexto

  return (
    <>
      <Header title="Confirmation" backRoute="/DishesWaiter" />
      <Grid>
        {selectedDishes.length > 0 ? (
          selectedDishes.map((dish) => (
            <HorizontalCard
              key={dish.title}
              title={dish.title}
              image={dish.image}
            />
          ))
        ) : (
          <p>No hay platos seleccionados</p>
        )}
      </Grid>
      <Footer />
    </>
  );
}

export default Confirmation;
