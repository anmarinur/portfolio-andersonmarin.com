import { useSelector } from 'react-redux';
import './Contact.css';
import { TechCard } from './TechCard';
import './TechCard.css';

export function Contact() {
  const technologies = {
    linkedin: 'LinkedIn',
    github:'GitHub', 
    instagram: 'Instagram',
    mail: 'E-mail'
  }

  const language = useSelector((state) => state.lang.language);

  const links = [
    'https://www.linkedin.com/in/andersonmarindev/',
    'https://github.com/anmarinur',
    'mailto:andersonmarindev@gmail.com',
    'https://www.instagram.com/anmarinur.dev/'
  ]

  return(
    <div className="container-contact">
      <h2 id="contact" className="contact-title">{language ? "Contact" : "Contacto"}</h2>
      <div className="container-tech-cards">
        {
          Object.keys(technologies).map((key, i) => (
            <a href={links[i]} target='_blanc'key={key}><TechCard name={technologies[key]} svgRoute={`/svg/${key}`}/></a>
          ))
        }
      </div>
    </div>
  );
}