import React, { useState, useEffect } from "react";
import "./horizontal-card.css";
import ingredientsData from "../ingredients/ingredients.json";

interface HorizontalCardProps {
  title: string;
  image: string;
  id: number; // Nuevo id para asociar ingredientes
  onClick: () => void; // Evento que se ejecutará al hacer clic en el card
}

function HorizontalCard({ title, image, id, onClick }: HorizontalCardProps) {
  const [ingredients, setIngredients] = useState<
    { name: string; quantity: number }[]
  >([]);

  useEffect(() => {
    // Filtrar ingredientes asociados al id
    const relatedIngredients = ingredientsData.ingredients.filter(
      (ingredient) => ingredient.id === id
    );
    setIngredients(relatedIngredients);
  }, [id]);

  return (
    <div className="card-style" onClick={onClick}>
      <img src={image} className="image-style" alt={title} />
      <div className="content-style">
        <h3 className="title-style">{title}</h3>
        <ul>
          {ingredients.map((ingredient) => (
            <li key={ingredient.name}>
              {ingredient.name}: {ingredient.quantity}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HorizontalCard;
