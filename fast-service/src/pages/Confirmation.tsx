import React from "react";
import Grid from "../components/menu-grid/Grid";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import ActionButtons from "../components/general/buttons/ActionButtons";
import { useDishContext } from "./DishContext";
import Header from "../components/general/header/Header";
import Footer from "../components/general/footer/Footer";
import ingredientsData from "../components/general/jsons/ingredients/ingredients.json";
import { useParams } from "react-router-dom";

function Confirmation() {
  const { selectedDishes, removeDish } = useDishContext();
  const { table } = useParams();
  const { id } = useParams();

  const getIngredientName = (id: number) => {
    for (const category of ingredientsData.ingredients) {
      const ingredient = category.ingredients.find((ing) => ing.id === id);
      if (ingredient) {
        return ingredient.name;
      }
    }
    return "Desconocido";
  };

  const groupIngredients = (ingredientIds: number[]) => {
    const ingredientCounts: { [key: number]: number } = {};
    ingredientIds.forEach((id) => {
      ingredientCounts[id] = (ingredientCounts[id] || 0) + 1;
    });

    return Object.entries(ingredientCounts).map(([id, count]) => ({
      name: getIngredientName(Number(id)),
      count,
    }));
  };

  return (
    <>
      <Header backRoute={`/DishesWaiter/${table}/${id}`} title="Confirmation" />
      <h2>Platos Seleccionados:</h2>
      <Grid>
        {selectedDishes.length > 0 ? (
          selectedDishes
            .filter((dish) => dish.table === Number(table))
            .map((dish, index) => (
              <div key={index}>
                <HorizontalCard
                  showButton={true}
                  title={dish.title}
                  image={dish.image}
                  onRemove={() => removeDish(index)}
                />
                {/* Mostrar ingredientes agrupados */}
                <p>Ingredientes:</p>
                <ul>
                  {groupIngredients(dish.ingredients).map(
                    ({ name, count }, idx) => (
                      <li key={idx}>
                        {name} x{count}
                      </li>
                    )
                  )}
                </ul>
              </div>
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
