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
    </div>
  );
}