import React from 'react';
import Marcas from '../../components/Marcas/Marcas';
import SeccionVentas from '../../components/seccionVentas/SeccionVentas';
import Carrito from '../../components/Carrito/Carrito';
import Navbar from '../../components/navbar/navbar';
import Portada from '../../components/portada/portada';
import LinkImages from '../../components/linkImages/LinkImages';
import './home.css';
const Home = ({ productos, secciones }) => {
  return (
    <>
      <div className="homeWrapper">
        <header>
          <Navbar {...productos} {...secciones} />
          <Portada />
        </header>
        <Carrito {...productos} />
        <LinkImages />
        <SeccionVentas {...productos} {...secciones} />
        <Marcas />
      </div>
    </>
  );
};

export default Home;
