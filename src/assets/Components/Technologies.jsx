import './Technologies.css'
import { TechCard } from './TechCard.jsx'

export function Technologies() {

  const technologies = {
    html5: 'HTML',
    css3: 'CSS',
    javascript: 'JavaScript',
    react: 'React'
  }

  return (
    <div className="container-tech">
      <h2 id="tech" className="tech-title">Technologies</h2>
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