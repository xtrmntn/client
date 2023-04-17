import { api } from '@/core/api';
import { Product } from './products';

export interface OrderProduct {
  id: number;
  quantity: number;
}

export interface Order {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  comment?: string;
  products: OrderProduct[]
}

export type OrderStatus = 'created' | 'processing' | 'send' | 'finished';

export type PaymentStatus = 'pending' | 'waiting_for_capture' | 'succeeded' | 'canceled';

export interface CreateOrderResponse {
  number: string;
  confirmationUrl: string;
}

export interface GetOrderResponse {
  order: {
    id: number;
    number: string;
    status: OrderStatus;
    transportCompany: string | null;
    trackNumber: string | null;
    items: {
      price: number;
      quantity: number;
      product: Product;
    }[];
  };
  payment: {
    id: string;
    status: PaymentStatus;
    amount: number;
    createdAt: string;
    confirmationUrl?: string;
  };
}

export const createOrder = async (order: Order) => {
  const { data } = await api.post<CreateOrderResponse>('/orders', order);
  return data;
};

export const getOrder = async (number: string) => {
  const { data } = await api.get<GetOrderResponse>(`/orders/number/${number}`);
  return data;
};
