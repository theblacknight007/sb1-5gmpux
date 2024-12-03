import React from 'react';
import { formatNumber } from '../../utils/number';
import { Trade } from '../../types/trade';
import { Clock } from 'lucide-react';

const mockTrades: Trade[] = [
  {
    id: '1',
    type: 'buy',
    price: 1.245,
    amount: 1000,
    total: 1245,
    timestamp: Date.now() - 5000,
  },
  {
    id: '2',
    type: 'sell',
    price: 1.243,
    amount: 800,
    total: 994.4,
    timestamp: Date.now() - 15000,
  },
  {
    id: '3',
    type: 'buy',
    price: 1.242,
    amount: 1200,
    total: 1490.4,
    timestamp: Date.now() - 30000,
  },
];

function formatTimestamp(timestamp: number): string {
  const seconds = Math.floor((Date.now() - timestamp) / 1000);
  if (seconds < 60) return `${seconds}s ago`;
  const minutes = Math.floor(seconds / 60);
  return `${minutes}m ago`;
}

export function TradeHistory() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200 flex items-center">
        <Clock className="h-5 w-5 text-gray-500 mr-2" />
        <h2 className="text-lg font-semibold">Trade History</h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-4 text-xs text-gray-500 pb-2">
          <span>Price</span>
          <span className="text-right">Amount</span>
          <span className="text-right">Total</span>
          <span className="text-right">Time</span>
        </div>
        <div className="space-y-2">
          {mockTrades.map((trade) => (
            <div key={trade.id} className="grid grid-cols-4 text-sm">
              <span className={trade.type === 'buy' ? 'text-green-500' : 'text-red-500'}>
                ${formatNumber(trade.price, 3)}
              </span>
              <span className="text-right">{formatNumber(trade.amount)}</span>
              <span className="text-right">${formatNumber(trade.total)}</span>
              <span className="text-right text-gray-500">
                {formatTimestamp(trade.timestamp)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}