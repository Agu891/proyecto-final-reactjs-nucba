import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';
const Navbar = ({ cartItems }) => {
  const dispatch = useDispatch();
  const handlerToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };
  return (
    <>
      <nav id="navBar">
        <div id="menuToggle">
          <input type="checkbox" id="inputMenu" />
          <span></span>
          <span></span>
          <span></span>
          <ul className="ul1" id="menu">
            <li id="logoQuery">PcGeeks</li>
            <li id="userName"> </li>
            <li className="menu__item">
              <a href="./index.html">Inicio</a>
            </li>
            <li className="menu__item">
              <a href="#box4seccion2">Monitores</a>
            </li>
            <li className="menu__item">
              <a href="#box4seccion2">Destacados y Ofertas</a>
            </li>
            <li className="menu__item" id="componentes">
              <input type="checkbox" id="checkboxComponentes" /> Componentes{' '}
              <FontAwesomeIcon id="flechita" icon={faAngleRight} />
              <ul>
                <li>
                  <a href="#box4seccion2">GPUs</a>
                </li>
                <li>
                  <a href="#box4seccion2">Memorias Ram</a>{' '}
                </li>
                <li>
                  <a href="#box4seccion2">Procesadores</a>
                </li>
                <li>
                  <a href="#box4seccion2">Motherboards</a>
                </li>
                <li>
                  <a href="#box4seccion2">Fuentes</a>
                </li>
                <li>
                  <a href="#box4seccion2">Gabinetes</a>
                </li>
              </ul>
            </li>
            <li className="menu__item" id="registrarse">
              <a href="/Loginpage/login.html">Iniciar Sesion</a>
            </li>
            <li className="menu__item" id="iniciarSesion">
              <a href="register/Registro.html">Registrarse</a>
            </li>
            <li className="menu__item">
              <a href="#contacto">Nosotros</a>
            </li>
            <li className="menu__item">
              <a href="./Contacto/contacto.html">Contacto</a>
            </li>
          </ul>
        </div>
        <div className="logo">
          <h1>PcGeeks</h1>
        </div>
        <div id="carrito">
          <FontAwesomeIcon
            icon={faCartShopping}
            id="imgCarrito"
            size="xl"
            color="white"
            onClick={handlerToggle}
          />
          {cartItems.length === 0 ? '' : <span>{cartItems.length}</span>}

          <div id="total"></div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
