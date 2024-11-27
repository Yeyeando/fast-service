import React, { useState } from "react";
import Header from "../components/general/header/Header";
import Footer from "../components/general/footer/Footer";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import Grid from "../components/general/menu-grid/Grid";
import IngredientPanel from "../components/general/dishes-waiter/sliding-panel/IngredientPanel";
import ActionButtons from "../components/general/buttons/ActionButtons";

function DishesWaiter() {
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const dishes = [
    { id: 1, title: "Burguer1", image: "././public/img/burguer1.jpg" },
    { id: 2, title: "Burguer2", image: "././public/img/burguer1.jpg" },
    { id: 3, title: "Burguer3", image: "././public/img/burguer1.jpg" },
    { id: 4, title: "Burguer4", image: "././public/img/burguer1.jpg" },
  ];

  const handleUpdateIngredients = (
    updatedIngredients: { id: number; name: string; quantity: number }[]
  ) => {
    console.log("Ingredientes actualizados:", updatedIngredients);
    // Puedes guardar los cambios en un estado global o en un servidor
  };

  return (
    <>
      <Header title="Menu" backRoute="/MenuWaiter" />
      <Grid>
        {dishes.map((dish) => (
          <HorizontalCard
            key={dish.id}
            title={dish.title}
            image={dish.image}
            id={dish.id}
            onClick={() => setSelectedCardId(dish.id)}
          />
        ))}
      </Grid>
      {selectedCardId && (
        <IngredientPanel
          selectedCardId={selectedCardId}
          onUpdateIngredients={handleUpdateIngredients}
        />
      )}
      <ActionButtons cancelRoute="/" confirmRoute="/confirmation" />
      <Footer />
    </>
  );
}

export default DishesWaiter;
