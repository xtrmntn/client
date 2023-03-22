/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
import { FC } from 'react';
import { Container, Heading, Stack } from '@chakra-ui/react';
import { Category } from '@/services/categories';
import { company } from '@/core/constants';
import Layout from '@/components/common/Layout';
import CategoriesList from '@/components/common/CategoriesList';
import WatchedProducts from '@/components/common/WatchedProducts';

interface HomeProps {
  categories: Category[];
}

const Home: FC<HomeProps> = ({ categories }) => (
  <Layout keywords={categories.map((category) => category.name)}>
    <Container>
      <Stack gap="60px">
        <Stack as="section" gap="10px">
          <Heading size="md">О компании</Heading>
          <p>Компания «{company}» — это молодой интернет-магазин, в котором есть все для дачи, дома, сада и огорода.</p>
          <p>Основной задачей нашей компании является забота о покупателях. Мы стараемся максимально быстро реагировать на запросы и пожелания наших клиентов. Мы всегда открыты для сотрудничества и продуктивных предложений.</p>
          <p>В нашем каталоге будет постоянно обновляться ассортимент. Компания «{company}» напрямую работает с крупнейшими поставщиками и официальными дистрибьюторами, поэтому мы гарантируем Вам подлинность и высокое качество представленных товаров.</p>
        </Stack>

        <Stack as="section" gap="20px">
          <Heading size="md">Категории товаров</Heading>
          <CategoriesList categories={categories} />
        </Stack>

        <WatchedProducts />
      </Stack>
    </Container>
  </Layout>
);

export default Home;
