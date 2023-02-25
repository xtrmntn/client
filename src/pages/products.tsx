import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { getProducts, Product } from '@/services/products';
import { GetManyResponse, Order, Sort } from '@/core/types';
import Products from '@/components/pages/Products';

const ProductsPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  products,
}) => (
  <Products products={products} />
);

export const getServerSideProps: GetServerSideProps<{
  products: GetManyResponse<Product>,
}> = async ({ query }) => {
  const {
    search, sort, order, count, minPrice, maxPrice, inStock, withImage,
  } = query;

  const products = await getProducts({
    search: search as string,
    sort: sort as Sort,
    order: order as Order,
    count: count ? Number(count) : undefined,
    minPrice: minPrice ? Number(minPrice) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined,
    inStock: inStock === 'true' ? true : undefined,
    withImage: withImage === 'true' ? true : undefined,
  });

  return {
    props: {
      products,
    },
  };
};

export default ProductsPage;
