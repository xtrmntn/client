import {
  createContext, FC, PropsWithChildren, useContext,
} from 'react';
import { useStorage } from '@/hooks/storage';

type ContextValue = ReturnType<typeof useProvideProducts>;

const productsContext = createContext<ContextValue | null>(null);

const useProvideProducts = () => {
  const [cart, setCart] = useStorage<Record<number, number>>('cart', {});
  const [wishlist, setWishlist] = useStorage<number[]>('wishlist', []);
  const [watched, setWatched] = useStorage<number[]>('watched', []);

  return {
    cart,
    wishlist,
    watched,
    setCart,
    setWishlist,
    setWatched,
  };
};

export const ProductsProvider: FC<PropsWithChildren> = ({ children }) => {
  const products = useProvideProducts();

  return (
    <productsContext.Provider value={products}>
      {children}
    </productsContext.Provider>
  );
};

export const useProducts = () => useContext(productsContext) as ContextValue;
