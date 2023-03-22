import { FC } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { Product } from '@/services/products';
import Link from '@/components/common/Link';
import CartItem from './CartItem';

interface CartListProps {
  products: Product[];
}

const CartList: FC<CartListProps> = ({ products }) => (
  products.length ? (
    <Stack gap="10px">
      {products.map((product) => (
        <CartItem
          key={product.id}
          product={product}
        />
      ))}
    </Stack>
  ) : (
    <Text>
      К сожалению, ваша корзина пуста, добавьте в нее товары в
      {' '}
      <Link href="/catalog">
        каталоге
      </Link>
    </Text>
  )
);

export default CartList;
