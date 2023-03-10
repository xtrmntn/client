import { useRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';
import { MdExpandMore } from 'react-icons/md';
import { Select } from '@chakra-ui/react';

const ProductsCountSelect: FC = () => {
  const router = useRouter();

  const items = [20, 50, 100];

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    router.push(
      { query: { ...router.query, count: e.target.value } },
      {},
      { scroll: false, shallow: true },
    );
  };

  return (
    <Select
      width="fit-content"
      icon={<MdExpandMore />}
      iconSize="20px"
      defaultValue={router.query.count}
      onChange={onChange}
    >
      {items.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </Select>
  );
};

export default ProductsCountSelect;
