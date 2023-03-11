import Link from 'next/link';
import { FC, useMemo } from 'react';
import { MdFavorite, MdShoppingCart } from 'react-icons/md';
import { HStack } from '@chakra-ui/react';
import { theme } from '@/core/theme';
import { useProducts } from '@/context/products';
import styles from './Actions.module.scss';

const Actions: FC = () => {
  const { wishlist, cart } = useProducts();

  const items = useMemo(() => ([
    {
      link: '/wishlist',
      icon: <MdFavorite color={theme.colors.danger} />,
      quantity: wishlist.length,
    },
    {
      link: '/cart',
      icon: <MdShoppingCart color={theme.colors.secondary} />,
      quantity: Object.keys(cart).length,
    },
  ]), [wishlist.length, cart]);

  return (
    <HStack gap="10px">
      {items.map((item) => (
        <Link
          key={item.link}
          className={styles.link}
          href={item.link}
        >
          {item.icon}
          <span className={styles.badge}>
            {item.quantity}
          </span>
        </Link>
      ))}
    </HStack>
  );
};

export default Actions;
