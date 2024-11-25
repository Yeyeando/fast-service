import Header from "../components/general/header/Header";
import Footer from "../components/general/footer/Footer";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import Grid from "../components/general/menu-grid/Grid";
function MenuWaiter() {
  return (
    <>
      <Header title="Menu" backRoute="/" />
      <Grid>
        <HorizontalCard title="Starters" image="././public/img/cocacola.jpg" />
        <HorizontalCard title="Burguers" image="././public/img/cocacola.jpg" />
        <HorizontalCard title="Desserts" image="././public/img/cocacola.jpg" />
        <HorizontalCard title="Drinks" image="././public/img/cocacola.jpg" />
      </Grid>
      <Footer />
    </>
  );
}

export default MenuWaiter;
