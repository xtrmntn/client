import {
  ChangeEvent, FC, FormEvent, useMemo, useState,
} from 'react';
import { useMutation } from 'react-query';
import {
  Button,
  Checkbox,
  Container, FormControl, FormLabel, HStack, Heading, Input, Select, Stack, Text, Textarea,
} from '@chakra-ui/react';
import { useProducts } from '@/context/products';
import { useGetProductsByIds } from '@/hooks/products';
import { formatPrice } from '@/utils/format';
import Layout from '@/components/common/Layout';
import Link from '@/components/common/Link';
import { OrderProduct, createOrder } from '@/services/orders';
import { useStorage } from '@/hooks/storage';

const Checkout: FC = () => {
  const [isSelfPickup, setSelfPickup] = useState(true);
  const [orders, setOrders] = useStorage<string[]>('orders', []);
  const { cart, setCart } = useProducts();
  const ids = useMemo(() => Object.keys(cart), [cart]);
  const { data, isSuccess } = useGetProductsByIds(ids);
  const { mutate: onCheckout, isLoading } = useMutation(createOrder, {
    onSuccess(data) {
      setCart({});
      setOrders([data.number, ...orders]);
      window.open(data.confirmationUrl, '_self');
    },
  });

  const count = useMemo(() => (
    Object.entries(cart).reduce((acc, [, quantity]) => acc + quantity, 0)
  ), [cart]);

  const total = useMemo(() => (
    isSuccess ? data.items.reduce((acc, item) => {
      const quantity = cart[item.id];
      if (!quantity) return acc;
      return acc + (item.price * quantity);
    }, 0) : 0
  ), [data?.items, cart]);

  const getEnding = (count: number) => {
    const last = count % 10;
    if (last === 1) return `${count} товар`;
    if (last > 1 && last < 5) return `${count} товара`;
    return `${count} товаров`;
  };

  const getData = (form: HTMLFormElement) => {
    const data = new FormData(form);
    return {
      fullName: data.get('fullName') as string,
      phone: data.get('phone') as string,
      email: data.get('email') as string,
      address: data.get('address') as string,
      comment: data.get('comment') as string || undefined,
      products: Object.entries(cart).reduce<OrderProduct[]>((acc, [id, quantity]) => {
        acc.push({ id: Number(id), quantity });
        return acc;
      }, []),
    };
  };

  const onChangeSelfPickup = (e: ChangeEvent<HTMLInputElement>) => {
    setSelfPickup(e.target.checked);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = getData(e.currentTarget);
    onCheckout(data);
  };

  return (
    <Layout title="Корзина">
      <Container maxWidth="800px">
        <form onSubmit={onSubmit}>
          <Stack alignItems="center" gap="20px">
            <Heading size="md">
              {getEnding(count)}
              {' '}
              на сумму
              {' '}
              {formatPrice(total)}
            </Heading>

            <FormControl isRequired>
              <FormLabel>ФИО</FormLabel>
              <Input name="fullName" />
            </FormControl>

            <HStack width="100%">
              <FormControl isRequired>
                <FormLabel>Телефон</FormLabel>
                <Input
                  name="phone"
                  type="tel"
                />
              </FormControl>

              <FormControl isRequired>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  type="email"
                />
              </FormControl>
            </HStack>

            <Checkbox
              colorScheme="whatsapp"
              checked={isSelfPickup}
              defaultChecked
              width="100%"
              onChange={onChangeSelfPickup}
            >
              Самовывоз из пункта выдачи
            </Checkbox>

            <FormControl isRequired>
              <FormLabel>Адрес</FormLabel>
              {isSelfPickup ? (
                <Select
                  name="address"
                  placeholder="Выберите адрес пункта выдачи"
                >
                  <option>г. Оренбург, пр. Гагарина, д. 27/5 (ЦВЗ Восток)</option>
                  <option>г. Оренбург, ул. Терешковой, д. 251 (Озон)</option>
                </Select>
              ) : (
                <Input name="address" />
              )}
            </FormControl>

            <FormControl>
              <FormLabel>Комментарий</FormLabel>
              <Textarea name="comment" />
            </FormControl>

            <Button
              type="submit"
              width="100%"
              color="white"
              backgroundColor="primary"
              isLoading={isLoading}
              _hover={{ backgroundColor: 'primary-dark' }}
            >
              Подтвердить заказ
            </Button>

            <Text
              fontSize="12px"
              textAlign="center"
              maxWidth="500px"
            >
              {/* eslint-disable-next-line max-len */}
              Нажимая на&nbsp;кнопку, вы&nbsp;даете согласие на&nbsp;обработку персональных данных и&nbsp;соглашаетесь&nbsp;с
              {' '}
              <Link href="/privacy">политикой конфиденциальности</Link>
            </Text>
          </Stack>
        </form>
      </Container>
    </Layout>
  );
};

export default Checkout;
