import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import { MdChevronLeft } from 'react-icons/md';
import {
  Button,
  Center, Container, Heading, HStack, Spinner, Stack, Text,
} from '@chakra-ui/react';
import { useProducts } from '@/context/products';
import { useGetProductsByIds } from '@/hooks/products';
import { formatEnding, formatPrice } from '@/utils/format';
import Layout from '@/components/common/Layout';
import CartList from './CartList';

const Cart: FC = () => {
  const router = useRouter();
  const { cart } = useProducts();
  const ids = useMemo(() => Object.keys(cart), [cart]);
  const { data, isLoading, isSuccess } = useGetProductsByIds(ids);

  const total = useMemo(() => (
    isSuccess ? data.items.reduce((acc, item) => {
      const quantity = cart[item.id];
      if (!quantity) return acc;
      return acc + (item.price * quantity);
    }, 0) : 0
  ), [data?.items, cart]);

  return (
    <Layout
      title="Корзина"
      description=""
      keywords={[]}
    >
      <Container maxWidth="1000px">
        <Stack as="section" gap="20px">
          <Heading as="h1">Корзина</Heading>

          {isLoading ? (
            <Center>
              <Spinner color="primary" />
            </Center>
          ) : (
            <CartList products={isSuccess ? data.items : []} />
          )}

          {!!ids.length && (
            <Stack gap="10px">
              <Heading as="h3" size="md">Итого</Heading>

              <HStack justifyContent="space-between">
                <Text>
                  {formatEnding(ids.length, ['товар', 'товара', 'товаров'])}
                </Text>

                <Text as="b" color="primary">
                  {formatPrice(total)}
                </Text>
              </HStack>

              <HStack justifyContent="space-between">
                <Button
                  leftIcon={<MdChevronLeft />}
                  onClick={router.back}
                >
                  Назад
                </Button>

                <Button
                  color="white"
                  colorScheme="whatsapp"
                  backgroundColor="primary"
                  _hover={{ backgroundColor: 'primary-dark' }}
                >
                  Оформить заказ
                </Button>
              </HStack>
            </Stack>
          )}
        </Stack>
      </Container>
    </Layout>
  );
};

export default Cart;
