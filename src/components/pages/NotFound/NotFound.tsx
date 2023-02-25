import { FC } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import Layout from '@/components/common/Layout';

const NotFound: FC = () => (
  <Layout
    title="404"
    description=""
    keywords={[]}
  >
    <Container textAlign="center">
      <Heading>404</Heading>
      <Heading
        as="h3"
        size="lg"
      >
        Страница не найдена
      </Heading>
    </Container>
  </Layout>
);

export default NotFound;
