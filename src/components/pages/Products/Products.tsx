import { useRouter } from 'next/router';
import { FC } from 'react';
import { Container } from '@chakra-ui/react';
import { Product } from '@/services/products';
import { GetManyResponse } from '@/core/types';
import Layout from '@/components/common/Layout';
import ProductsList from '@/components/common/ProductsList';
import ProductsLayout from '@/components/common/ProductsLayout';
import { useGetProducts } from '@/hooks/products';

interface ProductsProps {
  products: GetManyResponse<Product>;
}

const Products: FC<ProductsProps> = ({ products }) => {
  const router = useRouter();
  const { data, isRefetching, isSuccess } = useGetProducts(router.query, products);

  return (
    <Layout
      title={router.query.search as string}
      description=""
      keywords={[]}
    >
      <Container>
        <ProductsLayout>
          <ProductsList
            products={isSuccess ? data.items : []}
            isLoading={isRefetching}
          />
        </ProductsLayout>
      </Container>
    </Layout>
  );
};

export default Products;
