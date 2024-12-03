export interface MarketPair {
  pair: string;
  price: string;
  change: string;
  trending: boolean;
}

export interface OrderBookEntry {
  price: string;
  amount: string;
  total: string;
}

export interface OrderBook {
  bids: OrderBookEntry[];
  asks: OrderBookEntry[];
}