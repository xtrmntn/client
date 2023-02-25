import Link from 'next/link';
import { FC } from 'react';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { CategoryWithParent } from '@/services/categories';

interface BreadcrumbsProps {
  category: CategoryWithParent;
}

const getParentCategories = (category: CategoryWithParent): CategoryWithParent[] => (
  category.parent
    ? [...getParentCategories(category.parent), category]
    : [category]
);

const Breadcrumbs: FC<BreadcrumbsProps> = ({ category }) => {
  const categories = getParentCategories(category);

  return (
    <Breadcrumb>
      <BreadcrumbItem>
        <Link href="/catalog">Каталог</Link>
      </BreadcrumbItem>

      {categories.map((category) => (
        <BreadcrumbItem key={category.id}>
          <Link href={`/catalog/${category.slug}`}>{category.name}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
