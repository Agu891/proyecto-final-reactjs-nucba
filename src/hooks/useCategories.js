import { useAxios } from '../context/AxiosContext';
import { useQuery } from 'react-query';

export const useCategories = () => {
  const axios = useAxios();
  return useQuery('categtories', async () => {
    const { data } = await axios.get('category');
    return data;
  });
};
