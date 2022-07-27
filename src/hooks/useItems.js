import { useState } from 'react';

export const useItem = () => {
  const [item, setItem] = useState([]);
  return {
    item,
    setItem,
  };
};
