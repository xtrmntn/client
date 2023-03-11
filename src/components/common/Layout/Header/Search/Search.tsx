import { useRouter } from 'next/router';
import {
  ChangeEvent, FC, FormEvent, useState,
} from 'react';
import { IconButton, Input } from '@chakra-ui/react';
import { MdSearch } from 'react-icons/md';
import styles from './Search.module.scss';

const Search: FC = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push({
      pathname: '/products',
      query: { search },
    });
  };

  return (
    <form
      className={styles.search}
      onSubmit={onSubmit}
    >
      <Input
        name="search"
        value={search}
        onChange={onChange}
        placeholder="Поиск товаров"
        padding="0 50px 0 15px"
      />

      <IconButton
        className={styles.btn}
        aria-label="Найти"
        type="submit"
        icon={<MdSearch />}
      />
    </form>
  );
};

export default Search;
