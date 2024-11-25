import Header from "../components/general/header/Header";
import Footer from "../components/general/footer/Footer";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import Grid from "../components/general/menu-grid/Grid";
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
      <div className="buttons" style={{ marginBottom: "100px" }}>
        <button
          style={{
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Cancel
        </button>
        <button
          style={{
            backgroundColor: "blue",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Add
        </button>
      </div>

      <Footer />
    </>
  );
}

export default DishesWaiter;
