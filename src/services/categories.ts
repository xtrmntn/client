import { api } from '@/core/api';

export interface Category {
  id: number;
  name: string;
  slug: string;
  image: string | null;
}

export interface CategoryWithParent extends Category {
  parent?: CategoryWithParent;
}

export interface CategoryWithChildren extends CategoryWithParent {
  children: Category[];
}

export const getCategories = async () => {
  const { data } = await api.get<Category[]>('/categories');
  return data;
};

export const getCategory = async (slug: string) => {
  const { data } = await api.get<CategoryWithChildren>(`/categories/${slug}`);
  return data;
};
