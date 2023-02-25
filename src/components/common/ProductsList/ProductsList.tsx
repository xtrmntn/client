import { FC } from 'react';
import { SimpleGrid, SimpleGridProps, Text } from '@chakra-ui/react';
import { Product } from '@/services/products';
import ProductsCard from './ProductsCard';

interface ProductsListProps {
  products: Product[];
  isLoading: boolean;
}

const loadingStyles: SimpleGridProps = {
  opacity: 0.6,
  filter: 'blur(3px)',
  pointerEvents: 'none',
};

const ProductsList: FC<ProductsListProps> = ({ products, isLoading }) => (
  products.length ? (
    <SimpleGrid
      columns={{ sm: 2, md: 3, lg: 4 }}
      gap="20px"
      {...isLoading && loadingStyles}
    >
      {products.map((product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </SimpleGrid>
  ) : (
    <Text>К сожалению, ничего не найдено</Text>
  )
);

export default ProductsList;
