export interface MarketTicker {
  pair: string;
  lastPrice: number;
  high24h: number;
  low24h: number;
  volume24h: number;
  change24h: number;
  timestamp: number;
}

export interface MarketDepth {
  asks: [number, number][]; // [price, amount]
  bids: [number, number][]; // [price, amount]
}

export interface MarketDataState {
  tickers: Record<string, MarketTicker>;
  depth: Record<string, MarketDepth>;
  selectedPair: string;
}

export type MarketDataAction =
  | { type: 'UPDATE_TICKER'; payload: { pair: string; ticker: MarketTicker } }
  | { type: 'UPDATE_DEPTH'; payload: { pair: string; depth: MarketDepth } }
  | { type: 'SET_SELECTED_PAIR'; payload: string };