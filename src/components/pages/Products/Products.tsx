import { useRouter } from 'next/router';
import { FC } from 'react';
import { useQuery } from 'react-query';
import { Container } from '@chakra-ui/react';
import { getProducts, Product } from '@/services/products';
import { GetManyResponse } from '@/core/types';
import Layout from '@/components/common/Layout';
import ProductsList from '@/components/common/ProductsList';
import ProductsLayout from '@/components/common/ProductsLayout';

interface ProductsProps {
  products: GetManyResponse<Product>;
}

const Products: FC<ProductsProps> = ({ products }) => {
  const router = useRouter();

  const { data, isRefetching, isSuccess } = useQuery(
    ['products', router.query],
    () => getProducts(router.query),
    { initialData: products },
  );

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
