import './Portfolio.css';
import { CardPortfolio } from './CardPortfolio';
import data from './Portfolio.json';
import dataEsp from './PortfolioEsp.json'
import { useState } from 'react';
import { useSelector } from 'react-redux';

export function Portfolio() {

  const [limit, setLimit] = useState(true);
  const language = useSelector((state) => state.lang.language);
  let dataFull = language ? [...data] : [...dataEsp];
  let arrow = '/svg/arrow-down.svg';
  let textArrow = 'More';


  const handlerClick = () => {
    setLimit(!limit);
  }

  if (limit) {
    dataFull.splice(3);
    arrow = '/svg/arrow-down.svg';
    textArrow = language ? "View more" : "Ver más";
  } else {
    dataFull = data;
    arrow = '/svg/arrow-up.svg';
    textArrow = language ? 'View less' : "Ver menos";
  }

  return(
    <div id="portfolio" className="container-portfolio">
      <h2 className="title-portfolio">{language ? "Portfolio" : "Portafolio"}</h2>
      <div className="container-portfolio-cards">
        {
          dataFull.map((p, i) => (
            <CardPortfolio 
              key={p.name}
              name={p.name} 
              link={p.link} 
              repository={p.repository} 
              image={p.image}
              description={p.description}
              color={p.color}
              technologies={p.technologies}
            />
          ))
        }
      </div>
      <div className="container-portfolio-arrow" onClick={handlerClick}>
        <h3>{textArrow}</h3>
        <img src={arrow} alt="Ícono de una flecha hacia abajo" />
      </div>
    </div>
  );
}