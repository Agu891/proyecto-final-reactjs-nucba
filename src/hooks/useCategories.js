import { useState, useMemo } from 'react';
import { useAxios } from '../context/AxiosContext';
import { useQuery } from 'react-query';

export const useCategories = () => {
  const axios = useAxios();
  return useQuery('categtories', async () => {
    const { data } = await axios.get('category');
    return data;
  });
};

export const useCreateOrder = () => {
  const [initpoint, setInitpoint] = useState('');
  const axios = useAxios();
  const createOrder = async (userId, domicilio, localidad, items, subtotal) => {
    try {
      const response = await axios.post('orders', {
        userId: userId,
        shippingDetails: {
          domicilio: domicilio,
          localidad: localidad,
        },
        items: items,
        shippingPrice: 100,
        subtotal: subtotal,
        total: subtotal + 100,
      });
      setInitpoint(response.data.data.result.init_point);
    } catch (error) {
      console.error(error.response.data);
    }
  };
  return { createOrder, initpoint };
};
