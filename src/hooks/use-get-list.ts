import { useQuery } from '@tanstack/react-query';
import { getList } from '../services';


const CACHE_KEY = 'list';

export const useGetList = () => {
  return useQuery({
    queryKey: [CACHE_KEY],
    queryFn: async () => {
      const { data } = await getList();
      return data;
    },
    enabled: true,
  });
};
