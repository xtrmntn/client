import { useRouter } from 'next/router';
import { FC, FormEvent } from 'react';
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Tag,
  TagCloseButton,
  TagLabel,
  Text,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Layout from '@/components/common/Layout';
import { useStorage } from '@/hooks/storage';
import Link from '@/components/common/Link';

const Orders: FC = () => {
  const router = useRouter();
  const [orders, setOrders] = useStorage<string[]>('orders', []);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const number = (data.get('number') as string).toUpperCase();
    const url = `/orders/${number}`;
    router.push(url, url, { scroll: false, shallow: true });
  };

  const onRemove = (number: string) => {
    setOrders(orders.filter((order) => order !== number));
  };

  return (
    <Layout
      title="Узнать статус заказа"
      description="Узнать статус заказа."
    >
      <Container maxWidth="400px">
        <Stack gap="20px">
          <form onSubmit={onSubmit}>
            <Stack gap="20px">
              <FormControl isRequired>
                <FormLabel>Номер заказа</FormLabel>
                <Input name="number" />
              </FormControl>

              <Button
                type="submit"
                color="white"
                backgroundColor="primary"
                _hover={{ backgroundColor: 'primary-dark' }}
              >
                Узнать статус заказа
              </Button>
            </Stack>
          </form>

          {orders.length && (
            <Stack>
              <Text>Ваши заказы:</Text>

              <Wrap>
                {orders.map((number) => (
                  <WrapItem key={number}>
                    <Tag color="white" backgroundColor="secondary">
                      <TagLabel>
                        <Link href={`/orders/${number}`} color="white">
                          {number}
                        </Link>
                      </TagLabel>
                      <TagCloseButton onClick={() => onRemove(number)} />
                    </Tag>
                  </WrapItem>
                ))}
              </Wrap>
            </Stack>
          )}
        </Stack>
      </Container>
    </Layout>
  );
};

export default Orders;
