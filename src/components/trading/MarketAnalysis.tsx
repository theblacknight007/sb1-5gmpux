import React from 'react';
import { TrendingUp, DollarSign, BarChart2 } from 'lucide-react';
import { useMarketStats } from '../../hooks/useMarketStats';

export function MarketAnalysis() {
  const stats = useMarketStats('BBC/USD');

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Market Analysis</h2>
      
      <div className="grid grid-cols-3 gap-4">
        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-500 mb-2">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm">24h High</span>
          </div>
          <span className="text-lg font-semibold">${stats.high}</span>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-500 mb-2">
            <DollarSign className="h-5 w-5" />
            <span className="text-sm">24h Low</span>
          </div>
          <span className="text-lg font-semibold">${stats.low}</span>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-2 text-gray-500 mb-2">
            <BarChart2 className="h-5 w-5" />
            <span className="text-sm">Volume</span>
          </div>
          <span className="text-lg font-semibold">${stats.volume}</span>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Market Sentiment</h3>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-green-500"
            style={{ width: `${Math.max(0, Math.min(100, parseFloat(stats.change) + 50))}%` }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-500">
          <span>Bearish</span>
          <span>Neutral</span>
          <span>Bullish</span>
        </div>
      </div>
    </div>
  );
}