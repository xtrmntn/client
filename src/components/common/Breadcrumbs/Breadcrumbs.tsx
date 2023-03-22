import Link from 'next/link';
import { FC } from 'react';
import { Breadcrumb, BreadcrumbItem } from '@chakra-ui/react';
import { CategoryWithParent } from '@/services/categories';
import { getParentCategories } from '@/utils/categories';

interface BreadcrumbsProps {
  category: CategoryWithParent;
}

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
