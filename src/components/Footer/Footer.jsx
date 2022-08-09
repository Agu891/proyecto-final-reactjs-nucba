import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faAt,
  faLocationDot,
  faMobilePhone,
} from '@fortawesome/free-solid-svg-icons';

import './footer.css';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div id="footerDiv">
        <div>
          <Link to="/">
            <p>Inicio</p>
          </Link>
          <a href="">Quienes somos</a>
          <a href="">Preguntas Frecuentes</a>
          <Link to="/contacto">
            <p>Contacto</p>
          </Link>
        </div>
        <div>
          <img src="" alt="" />
          <input type="text" placeholder="Suscribite al newsletter..." />
        </div>
        <div id="redes">
          <a href="">Instagram</a>
          <a href="">Facebook</a>
          <a href="">Youtube</a>
          <a href="">Twitter</a>
          <a href="">Pinterest</a>
        </div>
        <div>
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
        </div>
      </div>
      <p id="derechos">PcGeeks todos los derechos reservados ©</p>
    </footer>
  );
};

export default Footer;
