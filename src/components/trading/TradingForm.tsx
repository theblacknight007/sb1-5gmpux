import React from 'react';
import { OrderTypeSelector } from './OrderTypeSelector';
import { OrderSideSelector } from './OrderSideSelector';
import { useOrderForm } from '../../hooks/useOrderForm';
import { OrderType, OrderSide } from '../../types/trading';

export function TradingForm() {
  const { formData, isSubmitting, handleInputChange, handleSubmit, setFormData } = useOrderForm();

  const handleTypeChange = (type: OrderType) => {
    setFormData(prev => ({ ...prev, type }));
  };

  const handleSideChange = (side: OrderSide) => {
    setFormData(prev => ({ ...prev, side }));
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <OrderTypeSelector value={formData.type} onChange={handleTypeChange} />
      
      <div className="my-6">
        <OrderSideSelector value={formData.side} onChange={handleSideChange} />
      </div>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price (USD)
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.price}
            onChange={(e) => handleInputChange('price', e.target.value)}
            disabled={formData.type === 'market'}
            placeholder={formData.type === 'market' ? 'Market Price' : '0.00'}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Amount (BBC)
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.amount}
            onChange={(e) => handleInputChange('amount', e.target.value)}
            placeholder="0.00"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Total (USD)
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            value={formData.total}
            disabled
            placeholder="0.00"
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-4 rounded-md text-white font-medium transition-colors ${
            formData.side === 'buy'
              ? 'bg-green-600 hover:bg-green-700'
              : 'bg-red-600 hover:bg-red-700'
          } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? 'Processing...' : `${formData.side === 'buy' ? 'Buy' : 'Sell'} BBC`}
        </button>
      </form>
    </div>
  );
}