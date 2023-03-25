import Link from 'next/link';
import Image from 'next/image';
import {
  FC, useCallback, useEffect, useMemo, useState,
} from 'react';
import {
  AspectRatio,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  Heading,
  HStack,
  NumberInput,
  NumberInputField,
  Stack,
  Text,
} from '@chakra-ui/react';
import { Product } from '@/services/products';
import { useProducts } from '@/context/products';
import { formatPrice } from '@/utils/format';
import { toast } from '@/utils/toast';

interface CartItemProps {
  product: Product;
}

const CartItem: FC<CartItemProps> = ({ product }) => {
  const {
    cart, wishlist, setCart, setWishlist,
  } = useProducts();
  const [quantity, setQuantity] = useState(cart[product.id] || 1);

  const isInWishlist = useMemo(() => wishlist.includes(product.id), [wishlist, product.id]);

  const onIncrement = () => setQuantity((prev) => prev + 1);

  const onDecrement = () => setQuantity((prev) => (prev <= 1 ? 1 : prev - 1));

  const onChangeQuantity = (value: string) => {
    const number = Number(value);
    if (Number.isNaN(number)) return;
    setQuantity(number || 1);
  };

  const onRemoveFromCart = useCallback(() => {
    const value = { ...cart };
    delete value[product.id];
    setCart(value);
  }, [cart]);

  const onAddToWishlist = useCallback(() => {
    setWishlist([...wishlist, product.id]);
    toast({ description: 'Товар добавлен в избранное' });
  }, [wishlist]);

  useEffect(() => {
    const value = { ...cart };
    value[product.id] = quantity;
    setCart(value);
  }, [quantity]);

  return (
    <Card>
      <CardBody>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          justifyContent="space-between"
          alignItems={{ base: 'flex-start', sm: 'center' }}
          gap={{ base: '10px', sm: '20px' }}
        >
          <HStack alignItems="flex-start" gap={{ base: '10px', sm: '20px' }}>
            <Link href={`/products/${product.slug}`}>
              <AspectRatio ratio={4 / 3} width={{ base: '100px', sm: '150px', md: '200px' }}>
                <Image
                  src={product.image ? `${process.env.UPLOADS_URL}/${product.image}` : '/placeholder.svg'}
                  alt={product.name}
                  priority
                  fill
                  style={{ objectFit: 'contain' }}
                />
              </AspectRatio>
            </Link>

            <Stack alignItems="flex-start" gap={{ base: 0, sm: '10px' }}>
              <Link href={`/products/${product.slug}`}>
                <Heading as="h3" size="md">{product.name}</Heading>
              </Link>

              <Text color={product.inStock ? 'primary' : 'danger'}>
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
              </Text>

              <Button variant="link" onClick={onRemoveFromCart}>
                Удалить из корзины
              </Button>

              {!isInWishlist && (
                <Button variant="link" onClick={onAddToWishlist}>
                  Добавить в избранное
                </Button>
              )}
            </Stack>
          </HStack>

          <Grid
            width={{ base: '100%', md: '50%' }}
            gridTemplateColumns={{
              base: 'repeat(2, auto)',
              sm: 'repeat(3, auto)',
              md: 'none',
              lg: 'repeat(3, 1fr)',
            }}
            justifyContent={{ base: 'space-between', sm: 'center' }}
            flexShrink={0}
            gap="20px"
          >
            <GridItem display="flex" alignItems="center">
              <HStack>
                <Button isDisabled={quantity <= 1} onClick={onDecrement}>-</Button>
                <NumberInput
                  value={quantity}
                  width="100%"
                  maxWidth="50px"
                  onChange={onChangeQuantity}
                >
                  <NumberInputField padding="0 7px" textAlign="center" />
                </NumberInput>
                <Button onClick={onIncrement}>+</Button>
              </HStack>
            </GridItem>

            <GridItem display={{ base: 'none', sm: 'block' }}>
              <Stack textAlign="center">
                <Text>Стоимость 1 шт.</Text>
                <Text as="b" color="primary">{formatPrice(product.price)}</Text>
              </Stack>
            </GridItem>

            <GridItem>
              <Stack textAlign="center">
                <Text>Итого</Text>
                <Text as="b" color="primary">{formatPrice(product.price * quantity)}</Text>
              </Stack>
            </GridItem>
          </Grid>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CartItem;
