import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import {
  AspectRatio, Card, CardBody, HStack, Stack, Text,
} from '@chakra-ui/react';
import { formatPrice } from '@/utils/format';
import { Product } from '@/services/products';

interface OrderItemProps {
  item: {
    price: number;
    quantity: number;
    product: Product;
  };
}

const OrderItem: FC<OrderItemProps> = ({ item }) => (
  <Card>
    <CardBody>
      <HStack alignItems="flex-start">
        <Link href={`/products/${item.product.slug}`}>
          <AspectRatio ratio={4 / 3} width="150px">
            <Image
              src={item.product.image ? `${process.env.UPLOADS_URL}/${item.product.image}` : '/placeholder.svg'}
              alt={item.product.name}
              priority
              fill
            />
          </AspectRatio>
        </Link>

        <Stack>
          <Link href={`/products/${item.product.slug}`}>
            <Text as="strong">{item.product.name}</Text>
          </Link>

          <Text>
            {item.quantity}
            {' шт. x '}
            {formatPrice(item.price)}
          </Text>

          <Text>
            Итого:
            {' '}
            {formatPrice(item.quantity * item.price)}
          </Text>
        </Stack>
      </HStack>
    </CardBody>
  </Card>
);

export default OrderItem;
