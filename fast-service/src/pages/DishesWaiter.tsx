import Header from "../components/general/header/Header";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import Grid from "../components/general/menu-grid/Grid";
import ActionButtons from "../components/general/buttons/ActionButtons";
import categoriesData from "../components/general/jsons/categories/categories.json";
import { useDishContext } from "./DishContext";
import { useParams } from "react-router-dom";

function DishesWaiter() {
  const { addDish } = useDishContext();
  const { id, table } = useParams();

  const categoryId = Number(id);
  const category = categoriesData.categories.find(
    (cat) => cat.id === categoryId
  );
  return (
    <>
      <Header title="Menu" backRoute={`/MenuWaiter/${table}`} />
      <Grid>
        {category ? (
          category.category.map((dish) => (
            <HorizontalCard
              key={dish.id}
              title={`${category.title} ${dish.id}`}
              image={dish.url}
              category={`${category.title}`}
              onClick={() =>
                addDish(
                  { title: `${category.title} ${dish.id}`, image: dish.url },
                  Number(table)
                )
              }
            />
          ))
        ) : (
          <p>No hay platos disponibles para esta categoría.</p>
        )}
      </Grid>
      <ActionButtons
        cancelRoute="/"
        confirmRoute={`/confirmation/${table}/${id}`}
      />
    </>
  );
}

export default DishesWaiter;
