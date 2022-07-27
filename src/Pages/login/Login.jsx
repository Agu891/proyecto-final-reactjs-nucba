import React from 'react';
import './login.css';
import Footer from '../../components/Footer/Footer';
import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Login = () => {
  return (
    <>
      <HeaderSimple />
      <form id="form">
        <div class="boxgral">
          <p>
            Inicio <FontAwesomeIcon icon={faAngleRight} /> MiCuenta{' '}
            <FontAwesomeIcon icon={faAngleRight} /> Login
          </p>
          <div class="boxtexto">
            <h2>Iniciar Sesión</h2>
            <p>Usuario</p>
            <input
              type="text"
              name="usuario"
              placeholder="Ingrese su usuario"
              id="usuario"
            />
            <p>Contraseña</p>
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
            />
            <a href="">¿Olvido su contraseña?</a>
            <a href="/register/Registro.html">¿No tenes cuenta? Registrate</a>
            <input type="submit" value="Iniciar Sesión" id="loginBtn" />
          </div>
        </div>
      </form>
      <Footer />
    </>
  );
};

export default Login;
