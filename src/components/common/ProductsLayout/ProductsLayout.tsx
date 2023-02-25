import { FC, PropsWithChildren } from 'react';
import {
  Grid, GridItem, Heading, HStack, Stack, useMediaQuery,
} from '@chakra-ui/react';
import { CategoryWithChildren } from '@/services/categories';
import Breadcrumbs from '../Breadcrumbs';
import CategoriesList from '../CategoriesList';
import ProductsFilters from './ProductsFilters';
import ProductsSort from './ProductsSort';
import ProductsCountSelect from './ProductsCountSelect';
import ProductsSearch from './ProductsSearch';
import ProductsFilterButton from './ProductsFilterButton';
import styles from './ProductsLayout.module.scss';

interface ProductsLayoutProps {
  category?: CategoryWithChildren;
}

const ProductsLayout: FC<PropsWithChildren<ProductsLayoutProps>> = ({
  category,
  children,
}) => {
  const [isMobile] = useMediaQuery('(max-width: 480px)');

  return (
    <Stack as="section" gap="20px">
      {category && (
        <>
          <Breadcrumbs category={category} />

          <Heading as="h1">{category.name}</Heading>

          {!!category.children.length && <CategoriesList categories={category.children} />}
        </>
      )}

      <Grid
        templateColumns={{ base: 'none', sm: 'minmax(200px, 1fr) 3fr' }}
        gap="20px"
      >
        <GridItem display={{ base: 'none', sm: 'block' }}>
          <ProductsFilters />
        </GridItem>

        <GridItem>
          <Stack gap={{ base: '10px', sm: '20px' }}>
            <HStack
              className={styles.stack}
              justifyContent={{ base: 'flex-start', sm: 'space-between' }}
              flexWrap="wrap"
              gap={{ base: '10px', sm: '20px' }}
            >
              <ProductsSort />
              <ProductsCountSelect />
              {isMobile && <ProductsFilterButton />}
            </HStack>

            <ProductsSearch />

            {children}
          </Stack>
        </GridItem>
      </Grid>
    </Stack>
  );
};

export default ProductsLayout;
