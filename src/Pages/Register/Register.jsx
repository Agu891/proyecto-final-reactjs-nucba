import React from 'react';
import Footer from '../../components/Footer/Footer';
import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import {
  faAngleRight,
  FontAwesomeIcon,
} from '@fortawesome/free-solid-svg-icons';
import './register.css';
const Register = () => {
  return (
    <>
      <HeaderSimple />
      <form action="">
        <div class="boxgral">
          <p>
            Inicio <FontAwesomeIcon icon={faAngleRight} /> MiCuenta
            <FontAwesomeIcon icon={faAngleRight} /> Crear cuenta
          </p>
          <h2>Crear cuenta</h2>
          <div class="boxes-input">
            <label for="nombre">Nombre</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="ej:. Juan"
            />
          </div>
          <div class="boxes-input">
            <label for="apellido">Apellido</label>
            <input
              type="text"
              name="apellido"
              id="apellido"
              placeholder="ej:. Rodriguez"
            />
          </div>

          <div class="boxes-input">
            <label for="email">Email</label>
            <input type="email" name="email" placeholder="ej:. user@mail.com" />
          </div>

          <div class="boxes-input">
            <label for="nombre">Usuario</label>
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder="ej:. agu891"
            />
          </div>
          <div class="boxes-input">
            <label for="nombre">Contraseña</label>
            <input type="password" name="nombre" id="nombre" />
          </div>
          <div class="boxes-input">
            <label for="nombre">Repita su contraseña</label>
            <input type="password" name="nombre" id="nombre" />
          </div>

          <button>Registrarse</button>

          <a href="/Loginpage/login.html">
            ¿Ya tenes una cuenta? INICIÁ SESIÓN
          </a>
        </div>
      </form>

      <Footer />
    </>
  );
};

export default Register;
