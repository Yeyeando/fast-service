import Header from "../components/general/header/Header";
import Footer from "../components/general/footer/Footer";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import Grid from "../components/general/menu-grid/Grid";
import { useNavigate } from "react-router-dom";
function MenuWaiter() {
  const navigate = useNavigate();
  return (
    <>
      <Header title="Menu" backRoute="/" />
      <Grid>
        <HorizontalCard
          title="Starters"
          image="././public/img/cocacola.jpg"
          onClick={() => navigate("/DishesWaiter")}
        />
        <HorizontalCard
          title="Burguers"
          image="././public/img/cocacola.jpg"
          onClick={() => navigate("/DishesWaiter")}
        />
        <HorizontalCard
          title="Desserts"
          image="././public/img/cocacola.jpg"
          onClick={() => navigate("/DishesWaiter")}
        />
        <HorizontalCard
          title="Drinks"
          image="././public/img/cocacola.jpg"
          onClick={() => navigate("/DishesWaiter")}
        />
      </Grid>
      <Footer />
    </>
  );
}

export default MenuWaiter;
