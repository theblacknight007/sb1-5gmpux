import React from 'react';
import { Wallet, Menu } from 'lucide-react';
import { useWallet } from '../../context/WalletContext';
import { formatNumber } from '../../utils/number';

export function Header() {
  const { wallet, connect, disconnect } = useWallet();

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">Baobab Markets</span>
          </div>
          <div className="flex items-center space-x-4">
            {wallet.isConnected ? (
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  <div>BBC: {formatNumber(wallet.balance.bbc)}</div>
                  <div>USD: ${formatNumber(wallet.balance.usd)}</div>
                </div>
                <button
                  onClick={disconnect}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={connect}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
              >
                <Wallet className="h-4 w-4 mr-2" />
                Connect Wallet
              </button>
            )}
            <button className="p-2 rounded-md text-gray-400 hover:text-gray-500">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}