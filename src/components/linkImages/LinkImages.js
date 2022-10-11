import React from 'react';

import {
  Seccion1Wrapper,
  WrapperGralSeccion2,
  BoxImgs,
} from './LinkImagesElements';

const LinkImages = ({ setSection }) => {
  const sectionHandler = (section) => {
    setSection(section);
    window.location.replace('/#ventas');
  };
  const Motherimg =
    'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665531763/imgParalinkImages/motherboard2_xfimuz.jpg';
  const MemoriaImg =
    'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665531762/imgParalinkImages/mejores-memorias-ram_vapzoc.jpg';
  const GpuImg =
    'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665531763/imgParalinkImages/video3_dlzyri.jpg';
  const MicroImg =
    'https://res.cloudinary.com/dhfwuqzoz/image/upload/v1665531762/imgParalinkImages/procesadores_snhlt5.jpg';
  return (
    <>
      <Seccion1Wrapper>
        <WrapperGralSeccion2>
          <BoxImgs
            image={Motherimg}
            onClick={() => sectionHandler('Motherboards')}
          >
            <h2 className="titulos">Motherboards</h2>
            <p>Motherboards de alta gama socket AM4 e intel</p>
          </BoxImgs>
          <BoxImgs
            image={MemoriaImg}
            onClick={() => sectionHandler('Memorias')}
          >
            <h2 className="titulos">Memorias Ram</h2>
            <p>RAMs ddr4 2666/3000/3200 Mhz</p>
          </BoxImgs>
          <BoxImgs
            image={GpuImg}
            onClick={() => sectionHandler('Tarjetas de video')}
          >
            <h2 className="titulos">GPUs</h2>
            <p>GPUs de ultima generacion GeForce RTX y ATI RX</p>
          </BoxImgs>
          <BoxImgs
            image={MicroImg}
            onClick={() => sectionHandler('Procesadores')}
          >
            <h2 className="titulos">Procesadores</h2>
            <p>Procesadores ultima generación AMD e INTEL</p>
          </BoxImgs>
        </WrapperGralSeccion2>
      </Seccion1Wrapper>
    </>
  );
};

export default LinkImages;
