import React from 'react';
import { formatPrice } from '../../utils/formatPrice';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import * as cartActions from '../../redux/cart/cart-actions';
import { useNavigate } from 'react-router-dom';
import {
  FinalizarBtn,
  Items,
  ItemsImg,
  TotalPrice,
  WrapperCarrito,
} from './CarritoElements';

const Carrito = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const subTotal = cartItems.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);
  const clearCart = () => {
    if (currentUser) {
      dispatch(cartActions.clearCart());
      alert('Gracias por su compra');
    } else {
      alert('Necesitas crear un usuario para continuar con la compra');
      navigate('/Register');
    }
  };

  const addToCart = (i) => {
    dispatch(cartActions.addItem(i));
  };
  const removeToCart = (i) => {
    dispatch(cartActions.removeItem(i));
  };
  return (
    <>
      <WrapperCarrito show={hidden}>
        {cartItems.length === 0 ? (
          <p>El carrito esta vacio</p>
        ) : (
          cartItems.map((item) => (
            <div className="contenedorItems">
              <Items>
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
                <ItemsImg src={item.img} alt={item.nombre} />
                <div>{formatPrice(item.price * item.quantity)}</div>
              </Items>
            </div>
          ))
        )}
        {cartItems.length >= 1 && (
          <>
            <TotalPrice>Total:{formatPrice(subTotal)}</TotalPrice>
            <FinalizarBtn onClick={clearCart}>Finalizar compra</FinalizarBtn>
          </>
        )}
      </WrapperCarrito>
    </>
  );
};

export default Carrito;
