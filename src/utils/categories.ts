import { CategoryWithParent } from '@/services/categories';

export const getParentCategories = (category: CategoryWithParent): CategoryWithParent[] => (
  category.parent
    ? [...getParentCategories(category.parent), category]
    : [category]
);
