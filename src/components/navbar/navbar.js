import React from 'react';

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
import {
  BurguerSpan,
  Carrito,
  CheckboxComponentes,
  Componentes,
  InputMenu,
  Logo,
  LogoQuery,
  Menu,
  MenuToggle,
  NavBarPrincipal,
  UserName,
  UserNameContainer,
} from './NavbarElements';

const Navbar = ({ setSection }) => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) =>
    state.cart.cartItems.reduce((acc, cartItem) => {
      return acc + cartItem.quantity;
    }, 0)
  );

  const sectionHandler = (section) => {
    setSection(section);
    window.location.replace('/#ventas');
  };
  const dispatch = useDispatch();
  const handlerToggle = () => {
    dispatch(cartActions.toggleCartHidden());
  };
  return (
    <>
      <NavBarPrincipal>
        <MenuToggle>
          <InputMenu type="checkbox" />
          <BurguerSpan margin="-10px" />
          <BurguerSpan margin="7px" />
          <BurguerSpan margin="23px" />
          <Menu>
            <LogoQuery>PcGeeks</LogoQuery>
            <li>Inicio</li>
            {currentUser ? (
              <>
                <UserNameContainer>
                  <p> Bienvenido, </p>
                  <UserName>
                    {currentUser.displayName
                      ? currentUser.displayName
                      : currentUser.email}
                  </UserName>
                </UserNameContainer>
                <li onClick={() => auth.signOut()}>Logout</li>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li id="registrarse">Iniciar Sesion</li>
                </Link>
                <Link to="/register">
                  <li id="iniciarSesion">Registrarse</li>
                </Link>
              </>
            )}

            <li onClick={() => sectionHandler('Destacados')}>
              Destacados y Ofertas
            </li>
            <Componentes>
              <CheckboxComponentes type="checkbox" /> Componentes
              <FontAwesomeIcon id="flechita" icon={faAngleRight} />
              <ul>
                <li onClick={() => sectionHandler('Tarjetas de video')}>
                  GPUs
                </li>
                <li onClick={() => sectionHandler('Memorias')}>Memorias Ram</li>
                <li onClick={() => sectionHandler('Procesadores')}>
                  Procesadores
                </li>
                <li onClick={() => sectionHandler('Motherboards')}>
                  Motherboards
                </li>
                <li onClick={() => sectionHandler('Fuentes')}>Fuentes</li>
                <li onClick={() => sectionHandler('Gabinetes')}>Gabinetes</li>
              </ul>
            </Componentes>
            <Link to="/contacto">
              <li>Contacto</li>
            </Link>
          </Menu>
        </MenuToggle>
        <Logo>
          <h1>PcGeeks</h1>
        </Logo>
        <Carrito>
          <FontAwesomeIcon
            icon={faCartShopping}
            id="imgCarrito"
            size="xl"
            color="white"
            onClick={handlerToggle}
          />
          {quantity === 0 ? '' : <span>{quantity}</span>}
        </Carrito>
      </NavBarPrincipal>
    </>
  );
};

export default Navbar;
