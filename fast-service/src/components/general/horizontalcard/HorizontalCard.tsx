import "./horizontal-card.css";

function HorizontalCard({ title, image, onClick }) {
  return (
    <div className="card-style" onClick={onClick} style={{ cursor: "pointer" }}>
      <img src={image} className="image-style" alt={title} />
      <div className="content-style">
        <h3 className="title-style">{title}</h3>
      </div>
    </div>
  );
}

export default HorizontalCard;
