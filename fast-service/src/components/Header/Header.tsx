import React from "react";
import "../Header/header.css";

interface HeaderProps {
  title: string;
  showBackButton?: boolean;
  showExitButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  showBackButton = true,
  showExitButton = true,
}) => {
  return (
    <header className="header">
      {showBackButton && <img src="././img/volver.svg" alt="volver" />}
      <h1>{title}</h1>
      {showExitButton && <img src="././img/salir.svg" alt="salir" />}
    </header>
  );
};

export default Header;
