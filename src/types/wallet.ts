export interface WalletState {
  isConnected: boolean;
  address: string | null;
  balance: {
    bbc: number;
    usd: number;
  };
}

export interface WalletContextType {
  wallet: WalletState;
  connect: () => Promise<void>;
  disconnect: () => void;
}