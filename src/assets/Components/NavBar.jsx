import { useState } from 'react';
import './NavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { addLanguage } from '../../redux/langSlice';

export function NavBar() {

  const dispatch = useDispatch();
  const language = useSelector((state) => state.lang.language);

  const [menu, setMenu] = useState(false);
  let menuIcon = '/menu.svg';

  const handlerClick = () => {
    setMenu(!menu);
  }

  const handlerClickEsp = () => {
      dispatch(addLanguage(false));
  }

  const handlerClickEng = () => {
    dispatch(addLanguage(true));
  }
 
  if (menu) {
    menuIcon = '/menuX.svg';
  } else {
    menuIcon = '/menu.svg';
  }

  return (
    <div className="container-navbar">
      <img className="navbar-menu" alt="Ícono menú" src={menuIcon} onClick={handlerClick}/>
      <ul className ={menu ? "container-navbar-ul menu-responsive" : "container-navbar-ul"}>
        <li><a href="#">Anderson Marín</a></li>
        <li><a href="#profile">{language ? 'Profile' : 'Perfil'}</a></li>
        <li><a href="#tech">{language ? 'Skills' : 'Habilidades'}</a></li>
        <li><a href="#portfolio">{language ? 'Portfolio' : 'Portafolio'}</a></li>
        <li><a href="#contact">{language ? 'Contact' : 'Contacto'}</a></li>
      </ul>
      <div className="container-navbar-flags">
        <div className="container-navbar-flag" onClick={handlerClickEsp}>
          <img className="flag-navbar" src="/colombia.svg" alt="Bandera de Colombia" />
          <span>ESP</span>
        </div>
        <div className="container-navbar-flag" onClick={handlerClickEng}>
          <img className="flag-navbar" src="/usa.svg" alt="Bandera de Estados Unidos"/>
          <span>ENG</span>
        </div>
      </div>
    </div>
  );
}