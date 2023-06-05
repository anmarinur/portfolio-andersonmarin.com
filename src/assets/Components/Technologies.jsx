import './Technologies.css'
import { TechCard } from './TechCard.jsx'
import { useSelector } from 'react-redux';

export function Technologies() {

  const language = useSelector((state) => state.lang.language);

  const technologies = {
    html5: 'HTML',
    css3: 'CSS',
    javascript: 'JavaScript',
    react: 'React',
    github: 'GitHub'
  }

  return (
    <div className="container-tech">
      <h2 id="tech" className="tech-title">{language ? 'Skills' : 'Habilidades'}</h2>
      <div className="container-tech-cards">
        {
          Object.keys(technologies).map(key => (
            <TechCard name={technologies[key]} key={key} svgRoute={`/${key}`}/>
          ))
        }
      </div>
    </div>
  );
}