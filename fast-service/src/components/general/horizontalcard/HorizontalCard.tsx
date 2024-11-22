import "./horizontal-card.css";

function HorizontalCard({ title, image }) {
  return (
    <div className="card-style">
      <img src={image} className="image-style" alt={title} />
      <div className="content-style">
        <h3 className="title-style">{title}</h3>
      </div>
    </div>
  );
}

export default HorizontalCard;
