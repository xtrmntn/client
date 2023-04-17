import { FC } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';
import {
  Center, Container, Spinner, Text,
} from '@chakra-ui/react';
import { getOrder } from '@/services/orders';
import Layout from '@/components/common/Layout';
import { useStorage } from '@/hooks/storage';
import OrderInfo from './OrderInfo';

interface OrderProps {
  number: string;
}

const Order: FC<OrderProps> = ({ number }) => {
  const [orders, setOrders] = useStorage<string[]>('orders', []);

  const {
    data, error, isLoading, isSuccess, isError,
  } = useQuery(['order', number], () => getOrder(number), {
    onSuccess() {
      if (!orders.includes(number)) {
        setOrders([number, ...orders]);
      }
    },
  });

  return (
    <Layout>
      <Container maxWidth="800px">
        {isLoading && (
          <Center>
            <Spinner color="primary" />
          </Center>
        )}

        {isSuccess && <OrderInfo order={data.order} payment={data.payment} />}

        {isError && axios.isAxiosError(error) && <Text textAlign="center">{error.response?.data.message}</Text>}
      </Container>
    </Layout>
  );
};

export default Order;
