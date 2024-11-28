import Header from "../components/general/header/Header";
import Footer from "../components/general/footer/Footer";
import HorizontalCard from "../components/general/horizontalcard/HorizontalCard";
import Grid from "../components/general/menu-grid/Grid";
import Menu from "../components/general/jsons/tables/tables.json";
import { useNavigate, useParams } from "react-router-dom";
function MenuWaiter() {
  const navigate = useNavigate();
  const { table } = useParams();
  const menuId = Menu.tables.find((tables) => tables.id === parseInt(table!));
  return (
    <>
      <Header title="Menu" backRoute="/" />
      <Grid>
        {menuId &&
          menuId.menu.map((item, index) => (
            <HorizontalCard
              title={item.title}
              image={item.url}
              onClick={() => navigate(`/DishesWaiter/${table}/${index + 1}`)}
            />
          ))}
      </Grid>
      <Footer />
    </>
  );
}

export default MenuWaiter;
