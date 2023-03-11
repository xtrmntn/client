import { FC } from 'react';
import { useQuery } from 'react-query';
import { Heading, Stack } from '@chakra-ui/react';
import { useProducts } from '@/context/products';
import { getProducts } from '@/services/products';
import ProductsList from '../ProductsList';

const WatchedProducts: FC = () => {
  const { watched } = useProducts();

  const { data, isLoading, isSuccess } = useQuery(
    ['products', { ids: watched }],
    () => getProducts({ ids: watched.join(',') }),
    {
      enabled: Boolean(watched.length),
      keepPreviousData: Boolean(watched.length),
    },
  );

  if (!isSuccess || isLoading) return null;

  return (
    <Stack as="section" gap="20px">
      <Heading size="md">Вы недавно смотрели</Heading>
      <ProductsList
        products={data.items}
        isLoading={false}
      />
    </Stack>
  );
};

export default WatchedProducts;
