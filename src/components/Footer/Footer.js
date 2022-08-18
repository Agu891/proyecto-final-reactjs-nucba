import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faAt,
  faLocationDot,
  faMobilePhone,
} from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import {
  FooterWrapper,
  LinkWrapper,
  Astyled,
  InputStyled,
  Redes,
  ListaContacto,
  Derechos,
} from './FooterElements';
const Footer = () => {
  return (
    <footer>
      <FooterWrapper>
        <LinkWrapper>
          <Link to="/">
            <Astyled>Inicio</Astyled>
          </Link>
          <Astyled>Quienes somos</Astyled>
          <Astyled>Preguntas Frecuentes</Astyled>
          <Link to="/contacto">
            <Astyled>Contacto</Astyled>
          </Link>
        </LinkWrapper>
        <div>
          <img src="./" alt="" />
          <InputStyled type="text" placeholder="Suscribite al newsletter..." />
        </div>
        <Redes id="redes">
          <Astyled href="">Instagram</Astyled>
          <Astyled href="">Facebook</Astyled>
          <Astyled href="">Youtube</Astyled>
          <Astyled href="">Twitter</Astyled>
          <Astyled href="">Pinterest</Astyled>
        </Redes>
        <ListaContacto>
          <div>
            <FontAwesomeIcon icon={faMobilePhone} /> <p> 2216230365</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faPhone} /> <p>114556643</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faAt} /> <p>pcgeeks@mail.com</p>
          </div>
          <div>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>Juan Bautista Alberdi 2435</p>
          </div>
        </ListaContacto>
      </FooterWrapper>
      <Derechos>PcGeeks todos los derechos reservados ©</Derechos>
    </footer>
  );
};

export default Footer;
