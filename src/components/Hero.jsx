import './Hero.css';

function Hero({ title, description, image }) {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="hero-content">
        <h1>{title}</h1>
        <p>{description}</p>
        <div className="hero-buttons">
          <button className="btn-watch">▶ Assistir</button>
          <button className="btn-info">Mais Informações</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
