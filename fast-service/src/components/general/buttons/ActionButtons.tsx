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
  const { clearDishes } = useDishContext(); 
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
          navigate(cancelRoute); 
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
        onClick={() => navigate(confirmRoute)}
      >
        Add
      </button>
    </div>
  );
};

export default ActionButtons;
