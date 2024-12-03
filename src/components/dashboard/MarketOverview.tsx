import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import { useMarketStats } from '../../hooks/useMarketStats';

const TRADING_PAIRS = ['BBC/USD', 'BTC/USD', 'ETH/USD'];

export function MarketOverview() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Market Overview</h2>
      <div className="space-y-4">
        {TRADING_PAIRS.map((pair) => {
          const stats = useMarketStats(pair);
          return (
            <div key={pair} className="flex items-center justify-between">
              <span className="font-medium">{pair}</span>
              <div className="flex items-center space-x-4">
                <span className="font-mono">${stats.price}</span>
                <span className={`flex items-center ${
                  stats.trending ? 'text-green-500' : 'text-red-500'
                }`}>
                  {stats.trending ? (
                    <TrendingUp className="h-4 w-4 mr-1" />
                  ) : (
                    <TrendingDown className="h-4 w-4 mr-1" />
                  )}
                  {stats.change}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}