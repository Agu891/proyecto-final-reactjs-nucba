import React from 'react';

import './seccionVentas.css';
import { items, formatPrice } from '../../data/data';
import Cards from '../Cards/Cards';

const SeccionVentas = (props) => {
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
                  <Cards
                    nombre={item.nombre}
                    precio={formatPrice(item.precio)}
                    img={item.img}
                    cuotas={formatPrice(parseInt(item.precio / 12))}
                  />
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
