import React from "react";
import "../Header/header.css";

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className="header">
      <img src="././img/volver.png" alt="logout" />
      <h1>{title}</h1>
      <img src="././img/salir.png" alt="logout" />
    </header>
  );
};

export default Header;
