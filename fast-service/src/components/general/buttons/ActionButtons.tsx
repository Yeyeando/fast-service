import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDishContext } from "../../../pages/DishContext";

interface ActionButtonsProps {
  cancelRoute: string; // Ruta a la que redirigir con el botón Cancel
  confirmRoute: string; // Ruta a la que redirigir con el botón Confirm
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  cancelRoute,
  confirmRoute,
}) => {
  const { clearDishes } = useDishContext(); // Obtenemos la función para limpiar el JSON
  const navigate = useNavigate();
  const { table } = useParams();

  return (
    <div className="buttons" style={{ marginBottom: "100px" }}>
      <button
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          clearDishes(Number(table)); // Limpia el JSON
          navigate(cancelRoute); // Navega a la ruta especificada
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
        onClick={() => navigate(confirmRoute)} // Navega a la ruta de confirmación
      >
        Add
      </button>
    </div>
  );
};

export default ActionButtons;
