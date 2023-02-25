import { FC } from 'react';
import { useQuery } from 'react-query';
import {
  Center, Container, Heading, Spinner, Stack,
} from '@chakra-ui/react';
import Layout from '@/components/common/Layout';
import { useProducts } from '@/context/products';
import { getProducts } from '@/services/products';
import WishlistList from './WishlistList';

const Wishlist: FC = () => {
  const { wishlist } = useProducts();

  const { data, isLoading, isSuccess } = useQuery(
    ['products', { ids: wishlist }],
    () => getProducts({ ids: wishlist.join(',') }),
    {
      enabled: Boolean(wishlist.length),
      keepPreviousData: Boolean(wishlist.length),
    },
  );

  return (
    <Layout
      title="Избранное"
      description=""
      keywords={[]}
    >
      <Container maxWidth="1000px">
        <Stack as="section" gap="20px">
          <Heading as="h1">Избранное</Heading>

          {isLoading ? (
            <Center>
              <Spinner color="primary" />
            </Center>
          ) : (
            <WishlistList products={isSuccess ? data.items : []} />
          )}
        </Stack>
      </Container>
    </Layout>
  );
};

export default Wishlist;
