import SeriesCard from './SeriesCard';
import './Carousel.css';

function Carousel({ title, series }) {
  return (
    <div className="carousel">
      <h2>{title}</h2>
      <div className="series-row">
        {series.map((s, i) => (
          <SeriesCard key={i} title={s.title} image={s.image} />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
