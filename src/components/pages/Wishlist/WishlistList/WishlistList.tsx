import Link from 'next/link';
import { FC } from 'react';
import { Button, Text } from '@chakra-ui/react';
import { Product } from '@/services/products';
import ProductsList from '@/components/common/ProductsList';

interface WishlistListProps {
  products: Product[];
}

const WishlistList: FC<WishlistListProps> = ({ products }) => (
  products.length ? (
    <ProductsList
      products={products}
      isLoading={false}
    />
  ) : (
    <Text>
      К сожалению, ваш список избранного пуст, добавьте в него товары в
      {' '}
      <Link href="/catalog">
        <Button
          variant="link"
          color="primary"
          _active={{ color: 'primary-dark' }}
        >
          каталоге
        </Button>
      </Link>
    </Text>
  )
);

export default WishlistList;
