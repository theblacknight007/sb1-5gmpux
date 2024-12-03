import React from 'react';
import { Header } from './components/layout/Header';
import { MarketOverview } from './components/dashboard/MarketOverview';
import { TradingChart } from './components/trading/TradingChart';
import { OrderBookComponent } from './components/trading/OrderBook';
import { TradingForm } from './components/trading/TradingForm';
import { TradeHistory } from './components/trading/TradeHistory';
import { MarketAnalysis } from './components/trading/MarketAnalysis';
import { AdvancedOrderTypes } from './components/trading/AdvancedOrderTypes';
import { UserProfile } from './components/settings/UserProfile';
import { WalletProvider } from './context/WalletContext';
import { NotificationProvider } from './context/NotificationContext';
import { MarketDataProvider } from './context/MarketDataContext';
import { NotificationList } from './components/notifications/NotificationList';

function App() {
  return (
    <NotificationProvider>
      <WalletProvider>
        <MarketDataProvider>
          <div className="min-h-screen bg-gray-50">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="lg:col-span-1 space-y-6">
                  <MarketOverview />
                  <TradeHistory />
                  <UserProfile />
                </div>
                <div className="lg:col-span-2 space-y-6">
                  <TradingChart />
                  <MarketAnalysis />
                </div>
                <div className="lg:col-span-1 space-y-6">
                  <OrderBookComponent />
                  <TradingForm />
                  <AdvancedOrderTypes />
                </div>
              </div>
            </main>
            <NotificationList />
          </div>
        </MarketDataProvider>
      </WalletProvider>
    </NotificationProvider>
  );
}

export default App;