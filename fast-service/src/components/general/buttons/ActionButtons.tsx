import React from "react";
import { useNavigate } from "react-router-dom";
import { useDishContext } from "../../../pages/DishContext";

interface ActionButtonsProps {
  cancelRoute: string;
  confirmRoute: string;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  cancelRoute,
  confirmRoute,
}) => {
  const { clearDishes } = useDishContext();
  const navigate = useNavigate();

  return (
    <div className="buttons" style={{ marginBottom: "100px" }}>
      <button
        style={{
          backgroundColor: "red",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          clearDishes();
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
