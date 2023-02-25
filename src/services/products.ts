import { api } from '@/core/api';
import { GetManyResponse, Order, Sort } from '@/core/types';
import { CategoryWithChildren } from './categories';

export interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string | null;
  image: string | null;
  inStock: string | null;
}

export interface Property {
  id: number;
  value: string;
  property: {
    id: number;
    name: string;
  };
}

export interface ProductWithRelations extends Product {
  properties: Property[];
  category: CategoryWithChildren;
}

export interface GetProductsParams {
  search?: string;
  page?: number;
  count?: number;
  ids?: string;
  sort?: Sort;
  order?: Order;
  categoryId?: number;
  minPrice?: number;
  maxPrice?: number;
  inStock?: boolean;
  withImage?: boolean;
}

export const getProducts = async (params: GetProductsParams) => {
  const { data } = await api.get<GetManyResponse<Product>>('/products', { params });
  return data;
};

export const getProduct = async (slug: string) => {
  const { data } = await api.get<ProductWithRelations>(`/products/${slug}`);
  return data;
};
