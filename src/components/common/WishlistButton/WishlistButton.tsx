import {
  FC, MouseEvent, useCallback, useMemo,
} from 'react';
import { IconButton, Tooltip, useToast } from '@chakra-ui/react';
import { MdFavorite } from 'react-icons/md';
import { useProducts } from '@/context/products';

interface WishlistButtonProps {
  id: number;
}

const WishlistButton: FC<WishlistButtonProps> = ({ id }) => {
  const toast = useToast();
  const { wishlist, setWishlist } = useProducts();

  const isInWishlist = useMemo(() => wishlist.includes(id), [wishlist, id]);

  const onClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    const value = isInWishlist ? wishlist.filter((item) => item !== id) : [...wishlist, id];
    setWishlist(value);
    toast({
      description: isInWishlist ? 'Товар удален из избранного' : 'Товар добавлен в избранное',
      position: 'top',
    });
  }, [isInWishlist, wishlist]);

  return (
    <Tooltip
      label={isInWishlist ? 'Удалить из избранного' : 'Добавить в избранное'}
      backgroundColor="secondary"
      placement="top"
      hasArrow
    >
      <IconButton
        aria-label="Добавить в избранное"
        color="white"
        backgroundColor={isInWishlist ? 'danger' : 'primary'}
        style={{ marginInlineStart: 0 }}
        icon={<MdFavorite size="20px" />}
        _hover={{ backgroundColor: isInWishlist ? 'danger-dark' : 'primary-dark' }}
        onClick={onClick}
      />
    </Tooltip>
  );
};

export default WishlistButton;
