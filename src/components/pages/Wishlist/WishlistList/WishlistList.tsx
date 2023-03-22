import { FC } from 'react';
import { Text } from '@chakra-ui/react';
import { Product } from '@/services/products';
import Link from '@/components/common/Link';
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
        каталоге
      </Link>
    </Text>
  )
);

export default WishlistList;
