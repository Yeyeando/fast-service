import React from "react";
import Grid from "../components/general/menu-grid/Grid";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import ActionButtons from "../components/general/buttons/ActionButtons";
import { useDishContext } from "./DishContext";
import Header from "../components/general/header/Header";
import Footer from "../components/general/footer/Footer";

function Confirmation() {
  const { selectedDishes } = useDishContext();

  return (
    <>
      <Header backRoute="/DishesWaiter" title="Confirmation" />
      <h2>Platos Seleccionados:</h2>
      <Grid>
        {selectedDishes.length > 0 ? (
          selectedDishes.map((dish, index) => (
            <HorizontalCard key={index} title={dish.title} image={dish.image} />
          ))
        ) : (
          <p>No hay platos seleccionados</p>
        )}
      </Grid>
      <ActionButtons cancelRoute="/" confirmRoute="/" />
      <Footer />
    </>
  );
}

export default Confirmation;
