export type OrderType = 'market' | 'limit';
export type OrderSide = 'buy' | 'sell';

export interface OrderFormData {
  type: OrderType;
  side: OrderSide;
  price: string;
  amount: string;
  total: string;
}