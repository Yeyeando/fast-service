import Header from "../components/Header/Header";
import Tables from "../components/Gallery/Gallery"; // Importar el componente
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
import Footer from "../components/Footer/Footer";
function MainWaiter() {
  return (
    <>
      <Header title="Select a table" />
      <Tables />
      <Footer />
    </>
  );
}

export default MainWaiter;
