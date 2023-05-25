import './Portfolio.css';
import { CardPortfolio } from './CardPortfolio';
import data from './Porfolio.json';

export function Portfolio() {

  return(
    <div className="container-portfolio">
      <h2 className="title-portfolio">Portfolio</h2>
      <div className="container-portfolio-cards">
        {
          data.map(p => (
            <CardPortfolio 
              key={p.name}
              name={p.name} 
              link={p.link} 
              repository={p.repository} 
              image={p.image}
              description={p.description}
              technologies={p.technologies}
            />
          ))
        }
      </div>
    </div>
  );
}