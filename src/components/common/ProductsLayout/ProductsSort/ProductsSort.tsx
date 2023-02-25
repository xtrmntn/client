import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { HStack } from '@chakra-ui/react';
import { Order, Sort } from '@/core/types';
import ProductsSortItem from './ProductsSortItem';

interface SortItem {
  key: Sort;
  text: string;
}

const ProductsSort: FC = () => {
  const router = useRouter();
  const [sort, setSort] = useState<Sort | null>(router.query.sort as Sort || null);

  const items: SortItem[] = [
    { key: 'name', text: 'По алфавиту' },
    { key: 'price', text: 'По цене' },
  ];

  const onClick = (sort: Sort) => (order: Order) => {
    setSort(sort);
    router.push(
      { query: { ...router.query, sort, order } },
      {},
      { scroll: false, shallow: true },
    );
  };

  return (
    <HStack width={{ base: '100%', sm: 'auto' }} gap="20px">
      {items.map((item) => (
        <ProductsSortItem
          key={item.key}
          text={item.text}
          onClick={onClick(item.key)}
          {...sort === item.key && {
            active: true,
            defaultValue: router.query.order as Order,
          }}
        />
      ))}
    </HStack>
  );
};

export default ProductsSort;
