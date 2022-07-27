import React from 'react';
import './carrito.css';

const Carrito = () => {
  return (
    <>
      <div className="wrapperCarrito">
        <p>El carrito esta vacio</p>

        <div className="contenedorItems">
          <div className="items"></div>
          <button>Finalizar Compra</button>
        </div>
      </div>
    </>
  );
};

export default Carrito;
