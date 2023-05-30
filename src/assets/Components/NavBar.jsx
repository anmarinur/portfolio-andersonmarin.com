import { useState } from 'react';
import './NavBar.css'
import menuIcon from '/menu.svg'

export function NavBar() {

  const [menu, setMenu] = useState(0);

  const handleClick = () => {
    setMenu(!menu);
    console.log(menu)
  }

  return (
    <div className="container-navbar">
      <img className="navbar-menu" alt="Ícono menú" src={menuIcon} onClick={handleClick}/>
      <ul className ={menu ? "container-navbar-ul menu-responsive" : "container-navbar-ul"}>
        <li><a href="#">Anderson Marín</a></li>
        <li><a href="#profile">Profile</a></li>
        <li><a href="#tech">Technologies</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </div>
  );
}