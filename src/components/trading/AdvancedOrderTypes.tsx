import React from 'react';
import { AlertTriangle } from 'lucide-react';

export function AdvancedOrderTypes() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4">Advanced Orders</h2>
      
      <div className="space-y-4">
        <div className="p-4 border rounded-md hover:border-indigo-500 cursor-pointer transition-colors">
          <h3 className="font-medium">Stop Loss</h3>
          <p className="text-sm text-gray-500 mt-1">
            Automatically sell when price falls below target
          </p>
        </div>

        <div className="p-4 border rounded-md hover:border-indigo-500 cursor-pointer transition-colors">
          <h3 className="font-medium">Take Profit</h3>
          <p className="text-sm text-gray-500 mt-1">
            Automatically sell when price reaches target
          </p>
        </div>

        <div className="p-4 border rounded-md bg-gray-50 relative">
          <div className="absolute top-4 right-4">
            <AlertTriangle className="h-5 w-5 text-gray-400" />
          </div>
          <h3 className="font-medium text-gray-400">Trailing Stop (Coming Soon)</h3>
          <p className="text-sm text-gray-400 mt-1">
            Dynamic stop loss that follows price movement
          </p>
        </div>
      </div>
    </div>
  );
}