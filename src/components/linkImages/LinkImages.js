import React from 'react';

import {
  Seccion1Wrapper,
  WrapperGralSeccion2,
  BoxImgs,
} from './LinkImagesElements';
import Motherimg from './img/motherboard2.jpg';
import MemoriaImg from './img/mejores-memorias-ram.jpg';
import GpuImg from './img/video3.jpg';
import MicroImg from './img/procesadores.jpg';
const LinkImages = () => {
  return (
    <>
      <Seccion1Wrapper>
        <WrapperGralSeccion2>
          <BoxImgs image={Motherimg}>
            <h2 className="titulos">Motherboards</h2>
            <p>Motherboards de alta gama socket AM4 e intel</p>
          </BoxImgs>
          <BoxImgs image={MemoriaImg}>
            <h2 className="titulos">Memorias Ram</h2>
            <p>RAMs ddr4 2666/3000/3200 Mhz</p>
          </BoxImgs>
          <BoxImgs image={GpuImg}>
            <h2 className="titulos">GPUs</h2>
            <p>GPUs de ultima generacion GeForce RTX y ATI RX</p>
          </BoxImgs>
          <BoxImgs image={MicroImg}>
            <h2 className="titulos">Procesadores</h2>
            <p>Procesadores ultima generación AMD e INTEL</p>
          </BoxImgs>
        </WrapperGralSeccion2>
      </Seccion1Wrapper>
    </>
  );
};

export default LinkImages;
