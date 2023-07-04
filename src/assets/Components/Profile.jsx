import './Profile.css'
import logo from '/svg/anmarinur.svg'
import bulb from '/svg/bulb.svg'
import { useSelector } from 'react-redux';

export function Profile() {

  const language = useSelector((state) => state.lang.language);

  return (
    <div id="profile" className='container-profile'>
      <div className='container-profile-logo'>
        <img className="logo-profile" alt="logo de anmarinur" src={logo} />
        <div className='container-profile-headers'>
          <h1 className='h1-profile'>Anderson Marín</h1>
          <h2 className='h2-profile'>{language ? 'Front End Web Developer' : 'Desarrollador Web Front End'}</h2>
        </div>
      </div>
      <div className='container-about-me'>
        <div className="container-about-me-p">
          <img alt="Ícono de un bombillo" src={bulb} className="p-bulb"/>
          <p className='p-profile'>{language ? "Highly motivated electronic engineer with passion for web development. Extensive experience working on various projects ranging from small applications to complex enterprise solutions." : 
          "Ingeniero electrónico altamente motivado y apasionado por el desarrollo web. Con amplia experiencia participando en varios proyectos, desde pequeñas aplicaciones hasta soluciones empresariales complejas."}</p>
        </div>
      </div>
    </div>
  );
}