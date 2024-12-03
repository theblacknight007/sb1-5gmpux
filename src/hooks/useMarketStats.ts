import { useMemo } from 'react';
import { useMarketData } from '../context/MarketDataContext';
import { formatNumber } from '../utils/number';

export function useMarketStats(pair: string) {
  const { state } = useMarketData();
  
  return useMemo(() => {
    const ticker = state.tickers[pair];
    if (!ticker) {
      return {
        price: '0.00',
        change: '0.00%',
        high: '0.00',
        low: '0.00',
        volume: '0.00',
        trending: false,
      };
    }

    return {
      price: formatNumber(ticker.lastPrice, 3),
      change: `${ticker.change24h >= 0 ? '+' : ''}${formatNumber(ticker.change24h, 2)}%`,
      high: formatNumber(ticker.high24h, 3),
      low: formatNumber(ticker.low24h, 3),
      volume: formatNumber(ticker.volume24h, 2),
      trending: ticker.change24h >= 0,
    };
  }, [state.tickers, pair]);
}