import React from "react";
import { useNavigate } from "react-router-dom";
import "../Header/header.css";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showExitButton?: boolean;
  backRoute?: string;
  mainRoute?: string;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  showExitButton = true,
  backRoute = "/",
  mainRoute = "/",
}) => {
  const navigate = useNavigate(); // Hook de React Router para navegar

  const handleBack = () => {
    if (backRoute) {
      navigate(backRoute); // Navegar a la ruta indicada
    }
  };
  const handleMainBack = () => {
    if (mainRoute) {
      navigate(mainRoute); // Navegar a la ruta indicada
    }
  };

  return (
    <header className="header">
      {showBackButton && (
        <img
          src="././img/volver.svg"
          alt="volver"
          onClick={handleBack} // Ejecutar la función handleBack al hacer clic
          style={{ cursor: "pointer" }} // Asegurar que parezca un botón
        />
      )}
      <h1>{title}</h1>
      {showExitButton && (
        <img
          src="././img/salir.svg"
          alt="salir"
          onClick={handleMainBack}
          style={{ cursor: "pointer" }}
        />
      )}
    </header>
  );
};

export default Header;
