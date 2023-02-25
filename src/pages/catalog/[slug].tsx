import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { CategoryWithChildren, getCategory } from '@/services/categories';
import { getProducts, Product } from '@/services/products';
import Category from '@/components/pages/Category';
import { GetManyResponse, Order, Sort } from '@/core/types';

const CategoryPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  category,
  products,
}) => (
  <Category
    category={category}
    products={products}
  />
);

export const getServerSideProps: GetServerSideProps<{
  category: CategoryWithChildren,
  products: GetManyResponse<Product>,
}> = async ({ query }) => {
  const {
    search, slug, sort, order, count, minPrice, maxPrice, inStock, withImage,
  } = query;

  const category = await getCategory(slug as string);

  const products = await getProducts({
    search: search as string,
    sort: sort as Sort,
    order: order as Order,
    categoryId: category.id,
    count: count ? Number(count) : undefined,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
    inStock: inStock === 'true' ? true : undefined,
    withImage: withImage === 'true' ? true : undefined,
  });

  return {
    props: {
      category,
      products,
    },
  };
};

export default CategoryPage;
