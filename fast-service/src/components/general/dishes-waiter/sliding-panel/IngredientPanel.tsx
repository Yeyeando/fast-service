import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface Ingredient {
  id: number;
  name: string;
  quantity: number;
}

interface IngredientPanelProps {
  dish: { title: string; image: string; ingredients: Ingredient[] };
  onClose: () => void;
  onConfirm: (updatedDish: {
    title: string;
    image: string;
    ingredients: { id: number; name: string; quantity: number }[];
  }) => void;
}

const IngredientPanel: React.FC<IngredientPanelProps> = ({
  dish,
  onClose,
  onConfirm,
}) => {
  const navigate = useNavigate();
  const { table, id } = useParams();

  const [ingredients, setIngredients] = useState(
    dish.ingredients.map((ing) => ({ ...ing, quantity: 1 })) // Default quantity = 1
  );

  const handleAddIngredient = (id: number) => {
    setIngredients((prev) =>
      prev.map((ing) =>
        ing.id === id ? { ...ing, quantity: ing.quantity + 1 } : ing
      )
    );
  };

  const handleRemoveIngredient = (id: number) => {
    setIngredients((prev) =>
      prev.map((ing) =>
        ing.id === id && ing.quantity > 0
          ? { ...ing, quantity: ing.quantity - 1 }
          : ing
      )
    );
  };

  const handleConfirm = () => {
    const updatedDish = {
      ...dish,
      ingredients,
    };
    onConfirm(updatedDish);
    navigate(`/Confirmation/${table}/${id}`); // Redirigir después de confirmar
  };

  return (
    <div className="ingredient-panel">
      <h2>Ingredientes para {dish.title}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient.id}>
            <span>{ingredient.name}</span>
            <button onClick={() => handleRemoveIngredient(ingredient.id)}>
              -
            </button>
            <span>{ingredient.quantity}</span>
            <button onClick={() => handleAddIngredient(ingredient.id)}>
              +
            </button>
          </li>
        ))}
      </ul>
      <button onClick={onClose}>Cancelar</button>
      <button onClick={handleConfirm}>Confirmar</button>
    </div>
  );
};

export default IngredientPanel;
