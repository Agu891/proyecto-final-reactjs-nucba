import React from 'react';

import { H2Portada, WrapperPortada, WrapperTitulo } from './PortadaElements';
import FondoPortada from './img/fondoportada.jpg';

const Portada = () => {
  return (
    <WrapperPortada image={FondoPortada}>
      <WrapperTitulo>
        <H2Portada>
          Sumate a la <span> masterrace</span>
        </H2Portada>

        <p>
          En PcGeeks nos encargamos de tu setup completo, desde los insumos para
          armar tu PC, hasta el layout de tu habitación
        </p>
      </WrapperTitulo>
    </WrapperPortada>
  );
};
export default Portada;
