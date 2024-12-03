import React from 'react';
import { OrderBook, OrderBookEntry } from '../../types/market';

const mockOrderBook: OrderBook = {
  asks: [
    { price: '1.245', amount: '1000.00', total: '1245.00' },
    { price: '1.244', amount: '1500.00', total: '1866.00' },
    { price: '1.243', amount: '2000.00', total: '2486.00' },
  ],
  bids: [
    { price: '1.242', amount: '800.00', total: '993.60' },
    { price: '1.241', amount: '1200.00', total: '1489.20' },
    { price: '1.240', amount: '1800.00', total: '2232.00' },
  ],
};

function OrderRow({ entry, type }: { entry: OrderBookEntry; type: 'ask' | 'bid' }) {
  return (
    <div className="grid grid-cols-3 text-sm py-1">
      <span className={type === 'ask' ? 'text-red-500' : 'text-green-500'}>
        {entry.price}
      </span>
      <span className="text-right">{entry.amount}</span>
      <span className="text-right text-gray-500">{entry.total}</span>
    </div>
  );
}

export function OrderBookComponent() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold">Order Book</h2>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 text-xs text-gray-500 pb-2">
          <span>Price (USD)</span>
          <span className="text-right">Amount (BBC)</span>
          <span className="text-right">Total (USD)</span>
        </div>
        
        <div className="space-y-1">
          {mockOrderBook.asks.map((ask, index) => (
            <OrderRow key={`ask-${index}`} entry={ask} type="ask" />
          ))}
        </div>
        
        <div className="text-center py-3 text-lg font-semibold text-gray-800">
          1.243 USD
        </div>
        
        <div className="space-y-1">
          {mockOrderBook.bids.map((bid, index) => (
            <OrderRow key={`bid-${index}`} entry={bid} type="bid" />
          ))}
        </div>
      </div>
    </div>
  );
}