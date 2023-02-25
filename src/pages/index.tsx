import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next';
import { Category, getCategories } from '@/services/categories';
import Home from '@/components/pages/Home';

const HomePage: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = ({
  categories,
}) => (
  <Home categories={categories} />
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

export default HomePage;
