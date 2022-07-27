import './App.css';
import Navbar from './components/navbar/navbar';
import Portada from './components/portada/portada';
import LinkImages from './components/linkImages/LinkImages';
import Footer from './components/Footer/Footer';
import Marcas from './components/Marcas/Marcas';
import SeccionVentas from './components/seccionVentas/SeccionVentas';
import Carrito from './components/Carrito/Carrito';

function App() {
  return (
    <>
      <header>
        <Navbar />
        <Carrito />
        <Portada />
      </header>

      <LinkImages />
      <SeccionVentas />
      <Marcas />
      <Footer />
    </>
  );
}

export default App;
