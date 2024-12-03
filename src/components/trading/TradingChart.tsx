import React from 'react';
import { LineChart, Maximize2 } from 'lucide-react';

export function TradingChart() {
  return (
    <div className="bg-white rounded-lg shadow col-span-2">
      <div className="p-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <LineChart className="h-5 w-5 text-gray-500" />
            <h2 className="text-lg font-semibold">BBC/USD Chart</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Maximize2 className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>
      <div className="p-4 h-96 flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Trading chart will be integrated here</p>
      </div>
    </div>
  );
}