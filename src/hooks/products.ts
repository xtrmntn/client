import { useQuery } from 'react-query';
import { getProducts, GetProductsParams, Product } from '@/services/products';
import { GetManyResponse } from '@/core/types';

export const useGetProductsByIds = (ids: (string | number)[]) => useQuery(
  ['products', { ids }],
  () => getProducts({ ids: ids.join(','), count: 1000 }),
  {
    enabled: Boolean(ids.length),
    keepPreviousData: Boolean(ids.length),
  },
);

export const useGetProducts = (
  query: GetProductsParams,
  initialData: GetManyResponse<Product>,
) => useQuery(
  ['products', query],
  () => getProducts(query),
  { initialData },
);
