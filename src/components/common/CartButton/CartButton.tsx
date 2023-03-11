import { useRouter } from 'next/router';
import {
  FC, MouseEvent, useCallback, useMemo,
} from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { Button, useToast } from '@chakra-ui/react';
import { useProducts } from '@/context/products';
import { Product } from '@/services/products';

interface CartButtonProps {
  product: Product;
}

const CartButton: FC<CartButtonProps> = ({ product }) => {
  const toast = useToast();
  const router = useRouter();
  const { cart, setCart } = useProducts();

  const isInCart = useMemo(() => Boolean(cart[product.id]), [cart]);

  const onClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!product.inStock) return;

    if (isInCart) {
      router.push('/cart');
    } else {
      const value = { ...cart };
      value[product.id] = 1;
      setCart(value);
      toast({ description: 'Товар довлен в корзину', position: 'top' });
    }
  }, [isInCart, cart]);

  return (
    <Button
      color="white"
      backgroundColor="primary"
      isDisabled={!product.inStock}
      _disabled={{ pointerEvents: 'none', backgroundColor: 'gray.400' }}
      _hover={{ backgroundColor: 'primary-dark' }}
      onClick={onClick}
      {...!isInCart && { rightIcon: <MdShoppingCart /> }}
    >
      {isInCart ? 'В корзине' : 'Купить'}
    </Button>
  );
};

export default CartButton;
