import Image from 'next/image';
import { FC } from 'react';
import {
  AspectRatio, Grid, GridItem, HStack, Stack, Text,
} from '@chakra-ui/react';
import { ProductWithRelations } from '@/services/products';
import { formatPrice } from '@/utils/format';
import CartButton from '@/components/common/CartButton';
import WishlistButton from '@/components/common/WishlistButton';

interface ProductInfoProps {
  product: ProductWithRelations;
}

const ProductInfo: FC<ProductInfoProps> = ({ product }) => (
  <Grid templateColumns="1fr 2fr" gap="20px">
    <GridItem>
      <AspectRatio ratio={4 / 3}>
        <Image
          src={product.image ? `${process.env.UPLOADS_URL}/${product.image}` : '/placeholder.svg'}
          alt={product.name}
          priority
          fill
        />
      </AspectRatio>
    </GridItem>

    <GridItem>
      <Stack gap="10px">
        <Text as="b" fontSize="2xl" color="primary">
          {formatPrice(product.price)}
        </Text>

        <Text color={product.inStock ? undefined : 'danger'}>
          {product.inStock ? 'В наличии' : 'Нет в наличии'}
        </Text>

        <HStack gap="10px">
          <CartButton product={product} />
          <WishlistButton id={product.id} />
        </HStack>

        <Text>{product.description}</Text>
      </Stack>
    </GridItem>
  </Grid>
);

export default ProductInfo;
