import React from "react";
import logoAsus from "./img/kisspng-asus-laptop-logo-brand-font-krypton-technologies-device-support-5b7eae6ce474d3.9411941915350288449358.png";
import logoAMD from "./img/png-transparent-advanced-micro-devices-logo-graphics-cards-video-adapters-central-processing-unit-amd-turion-computer-angle-text-trademark.png";
import logoATI from "./img/ati-radeon-vector-logo-11574205010tazreof6xf.png";
import logoCorsair from "./img/png-transparent-corsair-components-computer-keyboard-computer-cases-housings-logo-others-miscellaneous-leaf-computer-keyboard.png";
import logoNvidia from "./img/png-transparent-graphics-cards-video-adapters-nvidia-quadro-logo-geforce-nvidia.png";
import logoIntel from "./img/png-transparent-intel-logo-fujitsu-business-technology-intel-blue-text-trademark.png";

import "./marcas.css";
const Marcas = () => {
  return (
    <div id="boxLogos">
      <h2 id="tituloMarcas">Nuestras marcas</h2>
      <div id="nuestrasMarcas">
        <img src={logoAMD} alt="logo AMD" />
        <img src={logoAsus} alt="logo ASUS" />
        <img src={logoATI} alt="logo ATI" />
        <img src={logoCorsair} alt="corsair logo" />
        <img src={logoNvidia} alt="logo nvidia" />
        <img src={logoIntel} alt="logo intel" />
      </div>
    </div>
  );
};

export default Marcas;
