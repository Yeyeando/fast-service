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

  const categoryIngredients = ingredientsData.ingredients.find(
    (cat) => cat.category === category
  )?.ingredients;

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
    const newIngredients: number[] = [];
    Object.entries(ingredientCounts).forEach(([id, count]) => {
      for (let i = 0; i < count; i++) {
        newIngredients.push(Number(id));
      }
    });

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

  // Separar ingredientes en base y extras
  const baseIngredients = categoryIngredients?.filter(
    (ingredient) => (ingredientCounts[ingredient.id] || 0) > 0
  );
  const extraIngredients = categoryIngredients?.filter(
    (ingredient) => (ingredientCounts[ingredient.id] || 0) === 0
  );

  return (
    <div className="ingredient-panel">
      <div className="ingredient-panel-content">
        <button className="cancel-button" onClick={onClose}>
          X
        </button>
        <h2>{title}</h2>
        <h3>Ingredients base</h3>
        <div className="ingredient-list">
          {baseIngredients && baseIngredients.length > 0 ? (
            baseIngredients.map((ingredient: Ingredient) => (
              <div key={ingredient.id} className="ingredient-item">
                <span>{ingredient.name}</span>
                <div className="ingredient-controls">
                  <span>{ingredientCounts[ingredient.id] || 0}</span>
                  <button onClick={() => handleDecrement(ingredient.id)}>
                    <img
                      src="/img/minus.svg"
                      alt="minus"
                      className="ingredient-icon"
                    />
                  </button>
                  <button onClick={() => handleIncrement(ingredient.id)}>
                    <img
                      src="/img/plus.svg"
                      alt="plus"
                      className="ingredient-icon"
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No hay ingredientes base.</p>
          )}
        </div>
        <h3>Extras</h3>
        <div className="ingredient-list">
          {extraIngredients && extraIngredients.length > 0 ? (
            extraIngredients.map((ingredient: Ingredient) => (
              <div key={ingredient.id} className="ingredient-item">
                <span>{ingredient.name}</span>
                <div className="ingredient-controls">
                  <span>{ingredientCounts[ingredient.id] || 0}</span>
                  <button onClick={() => handleDecrement(ingredient.id)}>
                    <img
                      src="/img/minus.svg"
                      alt="minus"
                      className="ingredient-icon"
                    />
                  </button>
                  <button onClick={() => handleIncrement(ingredient.id)}>
                    <img
                      src="/img/plus.svg"
                      alt="plus"
                      className="ingredient-icon"
                    />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No hay ingredientes extra.</p>
          )}
        </div>
        <button onClick={handleConfirm}>Confirmar</button>
      </div>
    </div>
  );
};

export default IngredientPanel;
