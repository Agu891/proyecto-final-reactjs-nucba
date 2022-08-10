import React from 'react';
import './navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleRight,
  faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.util';
import { useSelector } from 'react-redux';

const Navbar = ({ cartItems, setSection }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
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

            {currentUser ? (
              <>
                <li className="userNameContainer">
                  <p> Bienvenido, </p>
                  <p className="userName">
                    {currentUser.displayName
                      ? currentUser.displayName
                      : currentUser.email}
                  </p>
                </li>
                <li onClick={() => auth.signOut()}>Logout</li>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li className="menu__item" id="registrarse">
                    Iniciar Sesion
                  </li>
                </Link>
                <Link to="/register">
                  <li className="menu__item" id="iniciarSesion">
                    Registrarse
                  </li>
                </Link>{' '}
              </>
            )}
            <li className="menu__item">Inicio</li>

            <li className="menu__item" onClick={() => setSection('Destacados')}>
              Destacados y Ofertas
            </li>
            <li className="menu__item" id="componentes">
              <input type="checkbox" id="checkboxComponentes" /> Componentes
              <FontAwesomeIcon id="flechita" icon={faAngleRight} />
              <ul>
                <li onClick={() => setSection('Tarjetas de video')}>GPUs</li>
                <li onClick={() => setSection('Memorias')}>Memorias Ram</li>
                <li onClick={() => setSection('Procesadores')}>Procesadores</li>
                <li onClick={() => setSection('Motherboards')}>Motherboards</li>
                <li onClick={() => setSection('Fuentes')}>Fuentes</li>
                <li onClick={() => setSection('Gabinetes')}>Gabinetes</li>
              </ul>
            </li>

            <Link to="/contacto">
              <li className="menu__item">Contacto</li>
            </Link>
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
