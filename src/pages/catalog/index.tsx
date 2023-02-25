import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { Category, getCategories } from '@/services/categories';
import Catalog from '@/components/pages/Catalog';

const CatalogPage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  categories,
}) => (
  <Catalog categories={categories} />
);

export const getServerSideProps: GetServerSideProps<{
  categories: Category[],
}> = async () => {
  const categories = await getCategories();

  return {
    props: {
      categories,
    },
  };
};

export default CatalogPage;
