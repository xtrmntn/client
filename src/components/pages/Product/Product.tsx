import { FC, useEffect } from 'react';
import { Container, Heading, Stack } from '@chakra-ui/react';
import { useProducts } from '@/context/products';
import { ProductWithRelations } from '@/services/products';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Layout from '@/components/common/Layout';
import WatchedProducts from '@/components/common/WatchedProducts';
import ProductInfo from './ProductInfo';
import Properties from './Properties';

interface ProductProps {
  product: ProductWithRelations;
}

const Product: FC<ProductProps> = ({ product }) => {
  const { watched, setWatched } = useProducts();

  useEffect(() => {
    if (watched.includes(product.id)) return;
    const products = [product.id, ...watched].slice(0, 4);
    setWatched(products);
  }, []);

  return (
    <Layout
      title={product.name}
      description=""
      keywords={[]}
    >
      <Container>
        <Stack gap="60px">
          <Stack as="section" gap="20px">
            <Breadcrumbs category={product.category} />
            <Heading as="h1">{product.name}</Heading>
            <ProductInfo product={product} />
          </Stack>

          {!!product.properties.length && <Properties properties={product.properties} />}

          <WatchedProducts />
        </Stack>
      </Container>
    </Layout>
  );
};

export default Product;
