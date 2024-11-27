import React, { useState, useEffect } from "react";
import ingredientsData from "../../ingredients/ingredients.json"; // Importa el JSON

interface IngredientPanelProps {
  selectedCardId: number; // El id del HorizontalCard seleccionado
  onUpdateIngredients: (
    updatedIngredients: { id: number; name: string; quantity: number }[]
  ) => void; // Callback para actualizar ingredientes
}

const IngredientPanel: React.FC<IngredientPanelProps> = ({
  selectedCardId,
  onUpdateIngredients,
}) => {
  const [ingredients, setIngredients] = useState(ingredientsData.ingredients);

  const [cardIngredients, setCardIngredients] = useState<
    { id: number; name: string; quantity: number }[]
  >([]);

  useEffect(() => {
    const relatedIngredients = ingredients.filter(
      (ingredient) => ingredient.id === selectedCardId
    );
    setCardIngredients(relatedIngredients);
  }, [selectedCardId, ingredients]);

  const handleAdd = (ingredientName: string) => {
    setCardIngredients((prev) =>
      prev.map((ingredient) =>
        ingredient.name === ingredientName
          ? { ...ingredient, quantity: ingredient.quantity + 1 }
          : ingredient
      )
    );
  };

  const handleRemove = (ingredientName: string) => {
    setCardIngredients((prev) =>
      prev.map((ingredient) =>
        ingredient.name === ingredientName && ingredient.quantity > 0
          ? { ...ingredient, quantity: ingredient.quantity - 1 }
          : ingredient
      )
    );
  };

  const handleSave = () => {
    onUpdateIngredients(cardIngredients); // Llama al callback para actualizar los ingredientes
  };

  return (
    <div>
      <h3>Ingredientes para el Card seleccionado:</h3>
      <ul>
        {cardIngredients.map((ingredient) => (
          <li key={ingredient.name}>
            {ingredient.name}: {ingredient.quantity}
            <button onClick={() => handleAdd(ingredient.name)}>+</button>
            <button onClick={() => handleRemove(ingredient.name)}>-</button>
          </li>
        ))}
      </ul>
      <button onClick={handleSave}>Guardar Cambios</button>
    </div>
  );
};

export default IngredientPanel;
