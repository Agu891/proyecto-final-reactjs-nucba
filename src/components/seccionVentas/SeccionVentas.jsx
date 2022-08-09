import React from 'react';
import './seccionVentas.css';
import { formatPrice } from '../../utils/formatPrice';
import { useSelector } from 'react-redux';

const SeccionVentas = ({ cartItems, setCartItems, section, setSection }) => {
  const porcentajeRecargoCredito = (numero) => {
    return (numero * 15) / 100 + numero;
  };

  let items = useSelector((state) => state.products.items);
  if (section) {
    items = { [section]: items[section] };
  }
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
                      <div className="imgWrapper">
                        <img src={item.img} alt="" />
                      </div>
                      <div className="textWrapper">
                        <h3>{item.nombre}</h3>

                        <p>{formatPrice(item.precio)}</p>
                        <span>
                          o <b>12</b> cuotas sin intereses de
                          <b>
                            {formatPrice(
                              parseInt(
                                porcentajeRecargoCredito(item.precio) / 12
                              )
                            )}
                          </b>
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
              {section && (
                <button className="btnTodos" onClick={() => setSection(null)}>
                  Ver todos los productos
                </button>
              )}
            </section>
            ;
          </>
        );
      })}
    </>
  );
};

export default SeccionVentas;
