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

  const subtechnologies = {
    bootstrap: 'Bootstrap',
    jquery: 'jQuery',
    nodejs: 'Node.js',
    php: 'PHP',
    symfony: 'Symfony',
    postgresql: 'PostgreSQL',
    mariadb: 'MariaDB'
  }

  return (
    <div className="container-tech">
      <h2 id="tech" className="tech-title">{language ? 'Skills' : 'Habilidades'}</h2>
      <div className="container-tech-cards">
        {
          Object.keys(technologies).map(key => (
            <TechCard name={technologies[key]} key={key} svgRoute={`/svg/${key}`}/>
          ))
        }
      </div>
      <h3 className='tech-sub-title'>{language ? "Also I've worked with:" : "También he trabajado con:"}</h3>
      <div className='container-tech-cards-sub'>
        {
          Object.keys(subtechnologies).map(key => (
            <TechCard name={subtechnologies[key]} key={key} svgRoute={`/svg/${key}`}/>
          ))
        }
      </div>
    </div>
  );
}