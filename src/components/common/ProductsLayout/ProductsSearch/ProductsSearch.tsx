import { useRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';
import { Input } from '@chakra-ui/react';
import { useDebounce } from '@/hooks/debounce';

const ProductsSearch: FC = () => {
  const router = useRouter();
  const debounce = useDebounce();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(() => {
      const search = e.target.value;
      const query: Record<string, string> = { ...router.query, search };
      if (!search) delete query.search;
      router.push({ query }, {}, { scroll: false, shallow: true });
    });
  };

  return (
    <Input
      placeholder="Поиск"
      defaultValue={router.query.search}
      onChange={onChange}
    />
  );
};

export default ProductsSearch;
