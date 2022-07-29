import { useState } from 'react';

export const useCartItem = () => {
  const [cartItems, setCartItems] = useState([]);
  return {
    cartItems,
    setCartItems,
  };
};
