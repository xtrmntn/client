import { useRouter } from 'next/router';
import { ChangeEvent, FC } from 'react';
import {
  Card,
  CardBody,
  Checkbox,
  FormControl,
  FormLabel,
  HStack,
  NumberInput,
  NumberInputField,
  Stack,
} from '@chakra-ui/react';
import { useDebounce } from '@/hooks/debounce';
import styles from './ProductsFilters.module.scss';

const ProductsFilters: FC = () => {
  const router = useRouter();
  const debounce = useDebounce();

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    debounce(() => {
      const { name, value } = e.target;
      const query = { ...router.query, [name]: value };
      if (!value) delete query[name];
      router.push({ query }, { query }, { scroll: false, shallow: true });
    });
  };

  const onCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const query = { ...router.query, [name]: checked };
    if (!checked) delete query[name];
    router.push({ query }, { query }, { scroll: false, shallow: true });
  };

  return (
    <Card className={styles.card}>
      <CardBody>
        <Stack gap="10px">
          <FormControl>
            <FormLabel>Цена</FormLabel>

            <HStack>
              <NumberInput defaultValue={router.query.minPrice as string}>
                <NumberInputField
                  name="minPrice"
                  placeholder="от"
                  min={0}
                  onChange={onInputChange}
                />
              </NumberInput>

              <NumberInput defaultValue={router.query.maxPrice as string}>
                <NumberInputField
                  name="maxPrice"
                  placeholder="до"
                  min={0}
                  onChange={onInputChange}
                />
              </NumberInput>
            </HStack>
          </FormControl>

          <FormControl>
            <Checkbox
              name="inStock"
              defaultChecked={router.query.inStock === 'true'}
              onChange={onCheckboxChange}
            >
              В наличии
            </Checkbox>
          </FormControl>

          <FormControl>
            <Checkbox
              name="withImage"
              defaultChecked={router.query.withImage === 'true'}
              onChange={onCheckboxChange}
            >
              С изображением
            </Checkbox>
          </FormControl>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default ProductsFilters;
