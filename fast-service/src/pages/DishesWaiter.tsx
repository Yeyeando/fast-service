import Header from "../components/general/header/Header";
import Footer from "../components/general/footer/Footer";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import Grid from "../components/general/menu-grid/Grid";
import { useDishContext } from "./DishContext";
import { useNavigate } from "react-router-dom";

function DishesWaiter() {
  const { addDish, clearDishes } = useDishContext(); // Obtenemos la función para agregar tarjetas
  const navigate = useNavigate();
  // Lista de platos disponibles
  const dishes = [
    { title: "Burguer1", image: "././public/img/burguer1.jpg" },
    { title: "Burguer2", image: "././public/img/burguer1.jpg" },
    { title: "Burguer3", image: "././public/img/burguer1.jpg" },
    { title: "Burguer4", image: "././public/img/burguer1.jpg" },
  ];

  return (
    <>
      <Header title="Menu" backRoute="/MenuWaiter" />
      <Grid>
        {dishes.map((dish) => (
          <HorizontalCard
            key={dish.title}
            title={dish.title}
            image={dish.image}
            onClick={() => addDish(dish)} // Agregamos al JSON global al hacer clic
          />
        ))}
      </Grid>
      <div className="buttons" style={{ marginBottom: "100px" }}>
        <button
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => clearDishes()}
        >
          Cancel
        </button>
        <button
          style={{
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => navigate("/Confirmation")}
        >
          Add
        </button>
      </div>
      <Footer />
    </>
  );
}

export default DishesWaiter;
