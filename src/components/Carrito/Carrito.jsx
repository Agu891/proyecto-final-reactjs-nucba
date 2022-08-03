import React from 'react';
import './carrito.css';
import { formatPrice } from '../../data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

const Carrito = ({ cartItems, setCartItems }) => {
  const hidden = useSelector((state) => state.cart.hidden);

  return (
    <>
      <div className={hidden ? 'wrapperCarrito' : 'wrapperCarrito openCarrito'}>
        {cartItems.length === 0 ? (
          <p>El carrito esta vacio</p>
        ) : (
          cartItems.map((item) => (
            <div className="contenedorItems">
              <div className="items">
                <h3>{item.nombre}</h3>
                <img src={item.img} alt={item.nombre} />
                <div>{formatPrice(item.precio)}</div>
                <FontAwesomeIcon className="trashIcon" icon={faTrashCan} />
              </div>
            </div>
          ))
        )}
        {cartItems.length >= 1 && (
          <button
            onClick={() => setCartItems([], alert('gracias  por su compra'))}
          >
            finalizar Compra
          </button>
        )}
      </div>
    </>
  );
};

export default Carrito;
