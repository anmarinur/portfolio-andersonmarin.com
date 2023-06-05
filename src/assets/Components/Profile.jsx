import './Profile.css'
import logo from '/anmarinur.svg'
import bulb from '/bulb.svg'
import { useSelector } from 'react-redux';

export function Profile() {

  const language = useSelector((state) => state.lang.language);

  console.log('render', language);

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
          <p className='p-profile'>{language ? "Hi, I'm Anderson! A highly motivated and passionate web developer." : 
          "Hola, soy Anderson! Un apasionado y altamente motivado desarrollador web."}</p>
        </div>
      </div>
    </div>
  );
}