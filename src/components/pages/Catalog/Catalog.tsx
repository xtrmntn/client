import { FC } from 'react';
import { Container, Heading, Stack } from '@chakra-ui/react';
import { Category } from '@/services/categories';
import Layout from '@/components/common/Layout';
import CategoriesList from '@/components/common/CategoriesList';

interface CatalogProps {
  categories: Category[];
}

const Catalog: FC<CatalogProps> = ({ categories }) => (
  <Layout
    title="Каталог"
    description=""
    keywords={categories.map((category) => category.name)}
  >
    <Container>
      <Stack as="section" gap="20px">
        <Heading as="h1">Каталог</Heading>
        <CategoriesList categories={categories} />
      </Stack>
    </Container>
  </Layout>
);

export default Catalog;
