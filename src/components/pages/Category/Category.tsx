import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import { Container, Stack } from '@chakra-ui/react';
import { CategoryWithChildren } from '@/services/categories';
import { Product } from '@/services/products';
import { getParentCategories } from '@/utils/categories';
import { useGetProducts } from '@/hooks/products';
import { GetManyResponse } from '@/core/types';
import Layout from '@/components/common/Layout';
import ProductsList from '@/components/common/ProductsList';
import ProductsLayout from '@/components/common/ProductsLayout';
import Pagination from '@/components/common/Pagination';
import WatchedProducts from '@/components/common/WatchedProducts';

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
  const { data, isRefetching, isSuccess } = useGetProducts(query, products);

  const categories = getParentCategories(category);

  return (
    <Layout
      title={category.name}
      keywords={categories.map((category) => category.name)}
    >
      <Container>
        <Stack gap="60px">
          <ProductsLayout category={category}>
            <ProductsList
              products={isSuccess ? data.items : []}
              isLoading={isRefetching}
            />

            {isSuccess && (
              <Pagination
                count={data.count}
                total={data.total}
              />
            )}
          </ProductsLayout>

          <WatchedProducts />
        </Stack>
      </Container>
    </Layout>
  );
};

export default Category;
