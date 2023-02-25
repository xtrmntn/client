import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { getProduct, ProductWithRelations } from '@/services/products';
import Product from '@/components/pages/Product/Product';

const ProductPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  product,
}) => (
  <Product product={product} />
);

export const getServerSideProps: GetServerSideProps<{
  product: ProductWithRelations,
}> = async ({ query }) => {
  const product = await getProduct(query.slug as string);

  return {
    props: {
      product,
    },
  };
};

export default ProductPage;
