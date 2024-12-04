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
    <div className="buttons">
      <div className="button">
        <button className="button-confirm"
          onClick={() => {
            clearDishes(Number(table)); // Limpia el JSON
            navigate(cancelRoute); 
          }}
        >
          Cancel
        </button>
      </div>
      <div className="button">
        <button className="button-cancel"
          onClick={() => navigate(confirmRoute)}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default ActionButtons;
