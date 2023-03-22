import { FC } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import Layout from '@/components/common/Layout';

const ServerError: FC = () => (
  <Layout
    title="500"
    description="Что-то пошло не так."
  >
    <Container textAlign="center">
      <Heading>500</Heading>
      <Heading
        as="h3"
        size="lg"
      >
        Что-то пошло не так
      </Heading>
    </Container>
  </Layout>
);

export default ServerError;
