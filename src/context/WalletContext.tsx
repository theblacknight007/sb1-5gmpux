import React, { createContext, useContext, useState } from 'react';
import { WalletState, WalletContextType } from '../types/wallet';

const initialWalletState: WalletState = {
  isConnected: false,
  address: null,
  balance: {
    bbc: 0,
    usd: 0,
  },
};

const WalletContext = createContext<WalletContextType | undefined>(undefined);

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [wallet, setWallet] = useState<WalletState>(initialWalletState);

  const connect = async () => {
    // Simulated wallet connection
    setWallet({
      isConnected: true,
      address: '0x1234...5678',
      balance: {
        bbc: 1000,
        usd: 5000,
      },
    });
  };

  const disconnect = () => {
    setWallet(initialWalletState);
  };

  return (
    <WalletContext.Provider value={{ wallet, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const context = useContext(WalletContext);
  if (context === undefined) {
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
}