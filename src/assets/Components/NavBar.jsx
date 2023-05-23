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
        <li>Anderson Marín</li>
        <li>Profile</li>
        <li>Technologies</li>
        <li>Portfolio</li>
        <li>Contact</li>
      </ul>
    </div>
  );
}