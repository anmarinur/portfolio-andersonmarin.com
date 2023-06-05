import { useState } from 'react';
import './NavBar.css';

export function NavBar() {

  const [menu, setMenu] = useState(false);
  let menuIcon = '/menu.svg';

  const handleClick = () => {
    setMenu(!menu);
  }

  if (menu) {
    menuIcon = '/menuX.svg';
  } else {
    menuIcon = '/menu.svg';
  }

  return (
    <div className="container-navbar">
      <img className="navbar-menu" alt="Ícono menú" src={menuIcon} onClick={handleClick}/>
      <ul className ={menu ? "container-navbar-ul menu-responsive" : "container-navbar-ul"}>
        <li><a href="#">Anderson Marín</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#tech">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="container-navbar-flags">
        <div className="container-navbar-flag">
          <img className="flag-navbar" src="/colombia.svg" alt="Bandera de Colombia" />
          <span>ESP</span>
        </div>
        <div className="container-navbar-flag">
          <img className="flag-navbar" src="/usa.svg" alt="Bandera de Estados Unidos" />
          <span>ENG</span>
        </div>
      </div>
    </div>
  );
}