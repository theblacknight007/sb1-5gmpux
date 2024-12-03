import React from 'react';
import { OrderType } from '../../types/trading';

interface OrderTypeSelectorProps {
  value: OrderType;
  onChange: (type: OrderType) => void;
}

export function OrderTypeSelector({ value, onChange }: OrderTypeSelectorProps) {
  return (
    <div className="flex space-x-2">
      <button
        type="button"
        className={`flex-1 py-2 rounded-md transition-colors ${
          value === 'limit'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => onChange('limit')}
      >
        Limit
      </button>
      <button
        type="button"
        className={`flex-1 py-2 rounded-md transition-colors ${
          value === 'market'
            ? 'bg-indigo-600 text-white'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
        onClick={() => onChange('market')}
      >
        Market
      </button>
    </div>
  );
}