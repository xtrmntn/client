import { FC } from 'react';
import { Container, Heading, Stack } from '@chakra-ui/react';
import { Category } from '@/services/categories';
import Layout from '@/components/common/Layout';
import CategoriesList from '@/components/common/CategoriesList';

interface HomeProps {
  categories: Category[];
}

const Home: FC<HomeProps> = ({ categories }) => (
  <Layout
    description=""
    keywords={categories.map((category) => category.name)}
  >
    <Container>
      <Stack gap="60px">
        <Stack as="section" gap="20px">
          <Heading size="md">Категории товаров</Heading>
          <CategoriesList categories={categories} />
        </Stack>
      </Stack>
    </Container>
  </Layout>
);

export default Home;
