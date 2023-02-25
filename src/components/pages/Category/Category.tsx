import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import { useQuery } from 'react-query';
import { Container } from '@chakra-ui/react';
import { CategoryWithChildren } from '@/services/categories';
import { getProducts, Product } from '@/services/products';
import { GetManyResponse } from '@/core/types';
import Layout from '@/components/common/Layout';
import ProductsList from '@/components/common/ProductsList';
import ProductsLayout from '@/components/common/ProductsLayout';

interface CategoryProps {
  category: CategoryWithChildren;
  products: GetManyResponse<Product>;
}

const Category: FC<CategoryProps> = ({ category, products }) => {
  const router = useRouter();

  const query = useMemo(() => ({
    ...router.query,
    categoryId: category.id,
  }), [router.query, category.id]);

  const { data, isRefetching, isSuccess } = useQuery(
    ['products', query],
    () => getProducts(query),
    { initialData: products },
  );

  return (
    <Layout
      title={category.name}
      description=""
      keywords={[]}
    >
      <Container>
        <ProductsLayout category={category}>
          <ProductsList
            products={isSuccess ? data.items : []}
            isLoading={isRefetching}
          />
        </ProductsLayout>
      </Container>
    </Layout>
  );
};

export default Category;
