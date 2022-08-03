import React from 'react';
import './linkImages.css';

const LinkImages = () => {
  return (
    <>
      <section className="seccion1Box" id="seccion1Box">
        <div id="boxSlider" className="boxgralseccion2">
          <div id="box1seccion2">
            <h2 className="titulos">Motherboards</h2>
            <p>Motherboards de alta gama socket AM4 e intel</p>
          </div>
          <div id="box2seccion2">
            <h2 className="titulos">Memorias Ram</h2>
            <p>RAMs ddr4 2666/3000/3200 Mhz</p>
          </div>
          <div id="box3seccion2">
            <h2 className="titulos">GPUs</h2>
            <p>GPUs de ultima generacion GeForce RTX y ATI RX</p>
          </div>
          <div id="box4seccion2">
            <h2 className="titulos">Procesadores</h2>
            <p>Procesadores ultima generación AMD e INTEL</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default LinkImages;
