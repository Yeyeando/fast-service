import Header from "../components/general/header/Header";
import Tables from "../components/main-waiter/gallery/Gallery";
import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";
function MainWaiter() {
  return (
    <>
      <Header title="Select a table" showBackButton={false} />
      <Tables nextRoute={"/MenuWaiter"} />
    </>
  );
}

export default MainWaiter;
