import { useState } from 'react';
import './TechCard.css'

export function TechCard({name, svgRoute}) {

  const [route, setRoute] = useState(svgRoute);

  const handlerMouseOver = () => {
    setRoute(`${route}-color`);
  }

  const handlerMouseLeave = () => {
    setRoute(svgRoute);
  }

  return (
    <div className="container-tech-card">
      <img className="tech-card-img" src={`${route}.svg`} alt={`Ícono de ${name}`} 
      onMouseOver={handlerMouseOver} onMouseLeave={handlerMouseLeave}/>
      <h3 className='tech-card-title'>{name}</h3>
    </div>
  );
}