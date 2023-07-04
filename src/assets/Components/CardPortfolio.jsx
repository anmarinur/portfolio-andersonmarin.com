import { useSelector } from 'react-redux';
import './CardPortfolio.css';

export function CardPortfolio({ name, link, repository, image, description, technologies, color }) {

  let htmlTech = '';
  let colorTags = '';

  const language = useSelector((state) => state.lang.language);

  technologies.map((tech, i) => (
    i < technologies.length - 1 ? htmlTech += tech + ', ' : htmlTech += tech 
  ))

  return (
    <div className="container-card-portfolio">
      <div className='container-card-portfolio-sm'>
        <h2>{name}</h2>
        <p className="container-card-portfolio-sm-p">{description}</p>
        <p className="container-card-portfolio-sm-tech">           
          {htmlTech}
        </p>
      </div>
      <figure>
        <img className="container-card-img" src={image} alt={name} />
        <div className="container-card-capa">
          <h2 className={`container-card-portfolio-title ${color}`}>{name}</h2>
          <p className={`container-card-portfolio-p ${color}`}>{description}</p>
          <div className={`container-card-portfolio-tech`}>           
            {technologies.map((tech) => {
             return <img src={`/svg/${tech}.svg`} alt={`${tech}`} key={`${tech}`} />
            })}
          </div>
        </div>
      </figure>
      <div className="container-card-links">
        <a href={repository} target='_blanck'><img src="/svg/github.svg" alt="Ícono github" /><span>{language ? "Repository" : "Repositorio"}</span></a>
        <a href={link} target='_blanck'><img src="/svg/www.svg" alt="Ícono Internet" /><span>Web</span></a>
      </div>
    </div>
  );
}