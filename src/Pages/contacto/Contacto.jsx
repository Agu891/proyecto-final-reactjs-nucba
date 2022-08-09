import React from 'react';

import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';
import './contacto.css';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Contacto = () => {
  return (
    <>
      <HeaderSimple />
      <div id="wrapperContacto">
        <div id="boxContacto">
          <p>
            Inicio <FontAwesomeIcon icon={faAngleRight} /> contacto
          </p>
          <h2>Contacto</h2>
          <span>Lunes a Viernes de 8 a 19hs</span>
          <span>WhatsApp: 55431124452</span>
          <span>Telefono: 0117823645</span>
          <span>Email: pcgeeks@mail.com</span>
          <span>Direccion : Jorge Urquiza 1235</span>
          <span>Visita nuestro canal de Youtube!</span>
        </div>
        <form action="">
          <label for="nombre">Nombre</label>
          <input type="text" value="" name="nombre" />
          <label for="Email">Email</label>
          <input type="text" value="" name="email" />
          <label for="nombre">Telefono</label>
          <input type="text" value="" />
          <label for="nombre">Mensaje</label>
          <textarea name="" id="textarea" cols="50" rows="5"></textarea>
          <input type="submit" value="Enviar" id="btnSubmit" />
        </form>
      </div>
    </>
  );
};

export default Contacto;
