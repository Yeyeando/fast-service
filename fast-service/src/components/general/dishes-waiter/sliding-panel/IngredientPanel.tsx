import React, { useState } from "react";
import "../sliding-panel/ingredient-panel.css";
import { useParams } from "react-router-dom";
import ingredientsData from "../../jsons/ingredients/ingredients.json";
import { useDishContext } from "../../../../pages/DishContext";

interface Ingredient {
  id: number;
  name: string;
}

interface IngredientPanelProps {
  title: string;
  image: string;
  category: string;
  initialIngredients: number[];
  onClose: () => void; // Para cerrar el panel sin confirmar
}

const IngredientPanel: React.FC<IngredientPanelProps> = ({
  title,
  image,
  category,
  initialIngredients,
  onClose,
}) => {
  const { addDish } = useDishContext();
  const { table } = useParams();

  // Filtra los ingredientes según la categoría del plato
  const categoryIngredients = ingredientsData.ingredients.find(
    (cat) => cat.category === category
  )?.ingredients;

  // Estado local para gestionar las cantidades
  const [ingredientCounts, setIngredientCounts] = useState<{
    [key: number]: number;
  }>(() => {
    const counts: { [key: number]: number } = {};
    if (initialIngredients) {
      initialIngredients.forEach((id) => {
        counts[id] = (counts[id] || 0) + 1;
      });
    }
    return counts;
  });

  const handleIncrement = (id: number) => {
    setIngredientCounts((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const handleDecrement = (id: number) => {
    setIngredientCounts((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] || 0) - 1, 0),
    }));
  };

  const handleConfirm = () => {
    // Genera un array de ingredientes basado en las cantidades
    const newIngredients: number[] = [];
    Object.entries(ingredientCounts).forEach(([id, count]) => {
      for (let i = 0; i < count; i++) {
        newIngredients.push(Number(id));
      }
    });

    // Añade el plato con los nuevos ingredientes al contexto
    addDish(
      {
        title,
        image,
        ingredients: newIngredients,
      },
      Number(table)
    );
    onClose();
  };

  return (
    <div className="ingredient-panel">
      <h2>{title}</h2>
      <h3>Selecciona los ingredientes:</h3>
      <div className="ingredient-list">
        {categoryIngredients ? (
          categoryIngredients.map((ingredient: Ingredient) => (
            <div key={ingredient.id} className="ingredient-item">
              <span>{ingredient.name}</span>
              <div className="ingredient-controls">
                <button onClick={() => handleDecrement(ingredient.id)}>
                  -
                </button>
                <span>{ingredientCounts[ingredient.id] || 0}</span>
                <button onClick={() => handleIncrement(ingredient.id)}>
                  +
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No hay ingredientes disponibles para esta categoría.</p>
        )}
      </div>
      <button onClick={handleConfirm}>Confirmar</button>
      <button onClick={onClose}>Cancelar</button>
    </div>
  );
};

export default IngredientPanel;
