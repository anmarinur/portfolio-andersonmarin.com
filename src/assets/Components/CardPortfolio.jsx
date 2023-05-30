import './CardPortfolio.css';

export function CardPortfolio({ name, link, repository, image, description, technologies, color }) {

  let htmlTech = '';
  let colorTags = '';

  technologies.map((tech, i) => (
    i < technologies.length - 1 ? htmlTech += '#' + tech + ', ' : htmlTech += '#' + tech 
  ))

  if (color == 'white') {
    colorTags = 'yellow';
  }

  return (
    <div className="container-card-portfolio">
      <div className='container-card-portfolio-sm'>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>           
          {htmlTech}
        </p>
      </div>
      <figure>
        <img className="container-card-img" src={image} alt={name} />
        <div className="container-card-capa">
          <h2 className={`container-card-portfolio-title ${color}`}>{name}</h2>
          <p className={`container-card-portfolio-p ${color}`}>{description}</p>
          <p className={`container-card-portfolio-tech ${colorTags}`}>           
            {htmlTech}
          </p>
        </div>
      </figure>
      <div className="container-card-links">
        <a href={repository} target='_blanck'><img src="/github.svg" alt="Ícono github" /><span>Repository</span></a>
        <a href={link} target='_blanck'><img src="/www.svg" alt="Ícono Internet" /><span>Demo</span></a>
      </div>
    </div>
  );
}