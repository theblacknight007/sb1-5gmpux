import React from 'react';
import { User, Shield, Key } from 'lucide-react';
import { useWallet } from '../../context/WalletContext';

export function UserProfile() {
  const { wallet } = useWallet();

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-lg font-semibold mb-4 flex items-center">
        <User className="h-5 w-5 mr-2" />
        Profile Settings
      </h2>
      
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-gray-400" />
            <span>Security Level</span>
          </div>
          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
            Advanced
          </span>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Wallet Address</label>
          <div className="mt-1 flex items-center space-x-2">
            <input
              type="text"
              readOnly
              value={wallet.address || 'Not connected'}
              className="block w-full rounded-md border-gray-300 bg-gray-50 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <Key className="h-5 w-5 text-gray-500" />
            </button>
          </div>
        </div>

        <div className="border-t pt-4">
          <h3 className="text-sm font-medium text-gray-700 mb-2">API Access</h3>
          <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700">
            Generate API Keys
          </button>
        </div>
      </div>
    </div>
  );
}