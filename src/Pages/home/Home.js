import React from 'react';
import Marcas from '../../components/Marcas/Marcas';
import SeccionVentas from '../../components/seccionVentas/SeccionVentas';
import Carrito from '../../components/Carrito/Carrito';
import Navbar from '../../components/navbar/Navbar';
import Portada from '../../components/portada/Portada';
import LinkImages from '../../components/linkImages/LinkImages';
import { HomeWrapper } from './HomeElements';
import Footer from '../../components/Footer/Footer';

const Home = ({ secciones }) => {
  return (
    <>
      <HomeWrapper>
        <header>
          <Navbar {...secciones} />
          <Portada />
        </header>
        <Carrito />
        <LinkImages {...secciones} />

        <SeccionVentas {...secciones} />

        <Marcas />
      </HomeWrapper>
      <Footer />
    </>
  );
};

export default Home;
