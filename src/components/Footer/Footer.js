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
  Pstyled,
  InputStyled,
  Redes,
  ListaContacto,
  Derechos,
  ImgTarjetas,
} from './FooterElements';
const Footer = (props) => {
  return (
    <footer>
      <FooterWrapper margin={props.margin}>
        <LinkWrapper>
          <Link to="/">
            <Pstyled>Inicio</Pstyled>
          </Link>
          <Pstyled>Quienes somos</Pstyled>
          <Pstyled>Preguntas Frecuentes</Pstyled>
          <Link to="/contacto">
            <Pstyled>Contacto</Pstyled>
          </Link>
        </LinkWrapper>
        <ImgTarjetas
          src="https://res.cloudinary.com/dhfwuqzoz/image/upload/v1668180897/Products/img/iconos-de-tarjetas-de-credito-psd_aqlyrr.webp"
          alt="tarjetas"
        />
        <div>
          <InputStyled type="text" placeholder="Suscribite al newsletter..." />
        </div>
        <Redes id="redes">
          <Pstyled href="">Instagram</Pstyled>
          <Pstyled href="">Facebook</Pstyled>
          <Pstyled href="">Youtube</Pstyled>
          <Pstyled href="">Twitter</Pstyled>
          <Pstyled href="">Pinterest</Pstyled>
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
