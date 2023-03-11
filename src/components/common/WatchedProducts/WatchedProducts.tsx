import { FC } from 'react';
import { Heading, Stack } from '@chakra-ui/react';
import { useProducts } from '@/context/products';
import { useGetProductsByIds } from '@/hooks/products';
import ProductsList from '../ProductsList';

const WatchedProducts: FC = () => {
  const { watched } = useProducts();
  const { data, isLoading, isSuccess } = useGetProductsByIds(watched);

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
