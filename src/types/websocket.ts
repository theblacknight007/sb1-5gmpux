export interface WebSocketMessage {
  type: 'price' | 'trade' | 'orderbook';
  data: any;
}

export interface PriceUpdate {
  pair: string;
  price: number;
  change: number;
  timestamp: number;
}

export interface WebSocketState {
  connected: boolean;
  lastMessage: WebSocketMessage | null;
}