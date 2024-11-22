import Header from "../components/general/header/Header";
import Footer from "../components/general/footer/Footer";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import Grid from "../components/menu-waiter/menu-grid/Grid";

function DishesWaiter() {
  return (
    <>
      <Header title="Menu" backRoute="/MenuWaiter" />
      <Grid>
        <HorizontalCard title="Burguer1" image="././public/img/burguer1.jpg" />
        <HorizontalCard title="Burguer2" image="././public/img/burguer1.jpg" />
        <HorizontalCard title="Burguer3" image="././public/img/burguer1.jpg" />
        <HorizontalCard title="Burguer4" image="././public/img/burguer1.jpg" />
      </Grid>
      <Footer />
    </>
  );
}

export default DishesWaiter;
