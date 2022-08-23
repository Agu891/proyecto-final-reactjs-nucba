import React from 'react';
import Marcas from '../../components/Marcas/Marcas';
import SeccionVentas from '../../components/seccionVentas/SeccionVentas';
import Carrito from '../../components/Carrito/Carrito';
import Navbar from '../../components/navbar/navbar';
import Portada from '../../components/portada/portada';
import LinkImages from '../../components/linkImages/LinkImages';
import { GlobalStylesContainer } from '../../Styles/Styles';

import { HomeWrapper } from './HomeElements';
import Footer from '../../components/Footer/Footer';

const Home = ({ productos, secciones }) => {
  return (
    <>
      <GlobalStylesContainer>
        <HomeWrapper>
          <header>
            <Navbar {...productos} {...secciones} />
            <Portada />
          </header>
          <Carrito {...productos} />
          <LinkImages />

          <SeccionVentas {...productos} {...secciones} />

          <Marcas />
        </HomeWrapper>
        <Footer />
      </GlobalStylesContainer>
    </>
  );
};

export default Home;
