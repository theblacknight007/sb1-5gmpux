import React from 'react';
import { OrderSide } from '../../types/trading';

interface OrderSideSelectorProps {
  value: OrderSide;
  onChange: (side: OrderSide) => void;
}

export function OrderSideSelector({ value, onChange }: OrderSideSelectorProps) {
  return (
    <div className="flex space-x-2">
      <button
        type="button"
        className={`flex-1 py-2 rounded-md transition-colors ${
          value === 'buy'
            ? 'bg-green-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => onChange('buy')}
      >
        Buy
      </button>
      <button
        type="button"
        className={`flex-1 py-2 rounded-md transition-colors ${
          value === 'sell'
            ? 'bg-red-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => onChange('sell')}
      >
        Sell
      </button>
    </div>
  );
}