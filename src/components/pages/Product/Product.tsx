import { FC } from 'react';
import { Container, Heading, Stack } from '@chakra-ui/react';
import { ProductWithRelations } from '@/services/products';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Layout from '@/components/common/Layout';
import ProductInfo from './ProductInfo';
import Properties from './Properties';

interface ProductProps {
  product: ProductWithRelations;
}

const Product: FC<ProductProps> = ({ product }) => (
  <Layout
    title={product.name}
    description=""
    keywords={[]}
  >
    <Container>
      <Stack as="section" gap="60px">
        <Stack gap="20px">
          <Breadcrumbs category={product.category} />
          <Heading as="h1">{product.name}</Heading>
          <ProductInfo product={product} />
        </Stack>

        {!!product.properties.length && <Properties properties={product.properties} />}
      </Stack>
    </Container>
  </Layout>
);

export default Product;
