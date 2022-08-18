import React from 'react';
import './carrito.css';
import { formatPrice } from '../../utils/formatPrice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';
const Carrito = () => {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const addToCart = (i) => {
    dispatch(cartActions.addItem(i));
  };
  const removeToCart = (i) => {
    dispatch(cartActions.removeItem(i));
  };
  return (
    <>
      <div className={hidden ? 'wrapperCarrito' : 'wrapperCarrito openCarrito'}>
        {cartItems === 0 ? (
          <p>El carrito esta vacio</p>
        ) : (
          cartItems.map((item) => (
            <div className="contenedorItems">
              <div className="items">
                <h3>{item.nombre}</h3>
                <button onClick={() => addToCart(item)} className="addRemBtns">
                  +
                </button>
                <p>{item.quantity}</p>
                <button
                  onClick={() => removeToCart(item)}
                  className="addRemBtns"
                >
                  -
                </button>
                <img src={item.img} alt={item.nombre} />
                <div>{formatPrice(item.precio * item.quantity)}</div>
              </div>
            </div>
          ))
        )}
        {cartItems >= 1 && (
          <button className="finalizarBtn" onClick={console.log('graciasS')}>
            finalizar Compra
          </button>
        )}
      </div>
    </>
  );
};

export default Carrito;
