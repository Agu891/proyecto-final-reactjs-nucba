import React from 'react';

import './seccionVentas.css';
import { items, formatPrice } from '../../data/data';

const SeccionVentas = ({ cartItems, setCartItems }) => {
  return (
    <>
      {Object.entries(items).map(([seccionName, items]) => {
        return (
          <>
            <section className="seccionVentasWrapper">
              <div>
                <h2>{seccionName}</h2>
              </div>
              <div className="wrapperProductos">
                {items.map((item) => (
                  <>
                    <div className="cardWrapper">
                      <div class="imgWrapper">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="textWrapper">
                        <h3>{item.nombre}</h3>

                        <p>{formatPrice(item.precio)}</p>
                        <span>
                          <b>12</b> cuotas sin intereses de
                          <b>{formatPrice(parseInt(item.precio / 12))}</b>
                        </span>
                        <button
                          onClick={() => setCartItems([...cartItems, item])}
                        >
                          Agregar al carrito
                        </button>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </section>
            ;
          </>
        );
      })}
    </>
  );
};

export default SeccionVentas;
