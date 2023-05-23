import './Profile.css'
import logo from '/anmarinur.svg'
import bulb from '/bulb.svg'

export function Profile() {
  return (
    <div className='container-profile'>
      <div className='container-profile-logo'>
        <img className="logo-profile" alt="logo de anmarinur" src={logo} />
        <div className='container-profile-headers'>
          <h1 className='h1-profile'>Anderson Marín</h1>
          <h2 className='h2-profile'>Front End Web Developer</h2>
        </div>
      </div>
      <div className='container-about-me'>
        <div className="container-about-me-p">
          <img alt="Ícono de un bombillo" src={bulb} className="p-bulb"/>
          <p className='p-profile'>Hi, I'm Anderson! A highly motivated and passionate web developer.</p>
        </div>
      </div>
    </div>
  );
}