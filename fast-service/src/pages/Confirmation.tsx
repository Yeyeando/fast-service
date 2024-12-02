import React from "react";
import Grid from "../components/general/menu-grid/Grid";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import ActionButtons from "../components/general/buttons/ActionButtons";
import { useDishContext } from "./DishContext";
import Header from "../components/general/header/Header";
import { useParams } from "react-router-dom";

function Confirmation() {
  const { selectedDishes, removeDish } = useDishContext();
  const { table } = useParams();
  const { id } = useParams();
  return (
    <>
      <Header backRoute={`/DishesWaiter/${table}/${id}`} title="Confirmation" />
      <h2>Platos Seleccionados:</h2>
      <Grid>
        {selectedDishes.length > 0 ? (
          selectedDishes
            .filter((dish) => dish.table === Number(table))
            .map((dish, index) => (
              <HorizontalCard
                showButton={true}
                key={index}
                title={dish.title}
                image={dish.image}
                buttonText="remove"
                onRemove={() => removeDish(index)}
              />
            ))
        ) : (
          <p>No hay platos seleccionados</p>
        )}
      </Grid>
      <ActionButtons cancelRoute="/" confirmRoute="/" />
    </>
  );
}

export default Confirmation;
