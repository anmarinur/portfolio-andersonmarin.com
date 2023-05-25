import './CardPortfolio.css';

export function CardPortfolio({ name, link, repository, image, description, technologies }) {
  return (
    <div className="container-card-portfolio">
      <h2 className="container-card-portfolio-title">{name}</h2>
      <img className="container-card-img" src={image} alt={name} />
      <p className="container-card-portfolio-p">{description}</p>
    </div>
  );
}