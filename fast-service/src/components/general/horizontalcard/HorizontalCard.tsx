import React from "react";
import "./horizontal-card.css";

interface HorizontalCardProps {
  title: string;
  image: string;
  onClick?: () => void;
  showButton?: boolean;
  buttonText?: string;
  onButtonClick?: () => void;
  onRemove?: () => void;
}

const HorizontalCard: React.FC<HorizontalCardProps> = ({
  title,
  image,
  onClick,
  showButton = false,
  buttonText = "Remove",
  onButtonClick,
  onRemove,
}) => {
  return (
    <div className="card-style" onClick={onClick} style={{ cursor: "pointer" }}>
      {showButton && (
        <button
          className="card-button"
          onClick={(e) => {
            e.stopPropagation(); // Evita que el clic en el botón active el `onClick` de la tarjeta
            if (onRemove) onRemove();
          }}
        >
          {buttonText}
        </button>
      )}
      <img src={image} className="image-style" alt={title} />
      <div className="content-style">
        <h3 className="title-style">{title}</h3>
      </div>
    </div>
  );
};
export default HorizontalCard;
