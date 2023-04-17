import { FC } from 'react';
import {
  SimpleGrid,
  Stack,
  Text,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { formatPrice } from '@/utils/format';
import {
  GetOrderResponse, OrderStatus, PaymentStatus,
} from '@/services/orders';
import OrderItem from './OrderItem';

const statuses: {
  order: Record<OrderStatus, string>;
  payment: Record<PaymentStatus, string>;
} = {
  order: {
    created: 'Создан',
    processing: 'В обработке',
    send: 'Отправлен',
    finished: 'Завершен',
  },
  payment: {
    pending: 'Ожидает оплаты',
    waiting_for_capture: 'Ожидает подтверждения',
    succeeded: 'Оплачен',
    canceled: 'Отменен',
  },
};

const OrderInfo: FC<GetOrderResponse> = ({ order, payment }) => (
  <Stack gap="10px">
    <Text>
      Заказ
      {' '}
      <b>{order.number}</b>
      {' от '}
      {new Date(payment.createdAt).toLocaleDateString()}
    </Text>

    <Text>
      Статус заказа:
      {' '}
      {statuses.order[order.status]}
      {' / '}
      {statuses.payment[payment.status]}
    </Text>

    {order.transportCompany && (
      <Text>
        Транспортная компания:
        {' '}
        {order.transportCompany}
      </Text>
    )}

    {order.trackNumber && (
      <Text>
        Трек-номер:
        {' '}
        {order.trackNumber}
      </Text>
    )}

    <Text>
      Сумма:
      {' '}
      {formatPrice(payment.amount)}
    </Text>

    {payment.confirmationUrl && (
      <Text>
        Ссылка для оплаты:
        {' '}
        <ChakraLink
          href={payment.confirmationUrl}
          color="secondary"
        >
          {payment.confirmationUrl}
        </ChakraLink>
      </Text>
    )}

    <SimpleGrid columns={{ sm: 1, md: 2 }} gap="20px">
      {order.items.map((item) => (
        <OrderItem
          key={item.product.id}
          item={item}
        />
      ))}
    </SimpleGrid>
  </Stack>
);

export default OrderInfo;
