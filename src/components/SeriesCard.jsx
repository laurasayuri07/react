import './SeriesCard.css';

function SeriesCard({ title, image }) {
  return (
    <div className="series-card">
      <img src={image} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

export default SeriesCard;
