import Link from 'next/link';
import Image from 'next/image';
import { FC } from 'react';
import {
  AspectRatio, Card, CardBody, CardFooter, Divider, HStack, Stack, Text,
} from '@chakra-ui/react';
import { Product } from '@/services/products';
import { formatPrice } from '@/utils/format';
import CartButton from '@/components/common/CartButton';
import WishlistButton from '@/components/common/WishlistButton';
import styles from './ProductsCard.module.scss';

interface ProductsCardProps {
  product: Product;
}

const ProductsCard: FC<ProductsCardProps> = ({ product }) => (
  <Card>
    <CardBody position="relative">
      <Stack textAlign="center" gap="10px">
        <Link href={`/products/${product.slug}`}>
          <AspectRatio ratio={4 / 3}>
            <Image
              src={product.image ? `${process.env.UPLOADS_URL}/${product.image}` : '/placeholder.svg'}
              alt={product.name}
              priority
              fill
              style={{ objectFit: 'contain' }}
            />
          </AspectRatio>
        </Link>

        <Link href={`/products/${product.slug}`}>
          <Text as="h3">{product.name}</Text>
        </Link>

        <Text color={product.inStock ? undefined : 'danger'}>
          {product.inStock ? 'В наличии' : 'Нет в наличии'}
        </Text>

        <Text as="b" color="primary">
          {formatPrice(product.price)}
        </Text>
      </Stack>
    </CardBody>

    <Divider color="gray.200" />

    <CardFooter>
      <HStack className={styles.footer}>
        <CartButton product={product} />
        <WishlistButton id={product.id} />
      </HStack>
    </CardFooter>
  </Card>
);

export default ProductsCard;
