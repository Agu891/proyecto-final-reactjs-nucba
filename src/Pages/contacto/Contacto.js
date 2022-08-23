import React from 'react';

import HeaderSimple from '../../components/HeaderSimple/HeaderSimple';

import Footer from '../../components/Footer/Footer';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ValidBtn } from '../login/LoginElements';
import {
  InputContacto,
  WrapperContacto,
  WrapperTextoContacto,
} from './ContactoElements';
const Contacto = () => {
  return (
    <>
      <HeaderSimple />
      <WrapperContacto>
        <WrapperTextoContacto>
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
        </WrapperTextoContacto>
        <form>
          <label for="nombre">Nombre</label>
          <InputContacto type="text" value="" name="nombre" />
          <label for="Email">Email</label>
          <InputContacto type="text" value="" name="email" />
          <label for="nombre">Telefono</label>
          <InputContacto type="text" value="" />
          <label for="nombre">Mensaje</label>
          <textarea name="" id="textarea" cols="50" rows="5"></textarea>
          <ValidBtn> Enviar </ValidBtn>
        </form>
      </WrapperContacto>
      <Footer margin="5%" />
    </>
  );
};

export default Contacto;
