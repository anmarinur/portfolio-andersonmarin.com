import './Portfolio.css';
import { CardPortfolio } from './CardPortfolio';
import data from './Porfolio.json';
import { useState } from 'react';

export function Portfolio() {

  const [limit, setLimit] = useState(true);
  let dataFull = [...data];
  let arrow = '/arrow-down.svg';
  let textArrow = 'More';

  const handlerClick = () => {
    setLimit(!limit);
  }

  if (limit) {
    dataFull.splice(3);
    arrow = '/arrow-down.svg';
    textArrow = 'View more';
  } else {
    dataFull = data;
    arrow = '/arrow-up.svg';
    textArrow = 'Less';
  }

  console.log(limit, dataFull)

  return(
    <div id="portfolio" className="container-portfolio">
      <h2 className="title-portfolio">Portfolio</h2>
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