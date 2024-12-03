import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { useWebSocket } from '../hooks/useWebSocket';
import { MarketDataState, MarketDataAction, MarketTicker, MarketDepth } from '../types/market-data';
import { useNotifications } from './NotificationContext';

const initialState: MarketDataState = {
  tickers: {},
  depth: {},
  selectedPair: 'BBC/USD',
};

function marketDataReducer(state: MarketDataState, action: MarketDataAction): MarketDataState {
  switch (action.type) {
    case 'UPDATE_TICKER':
      return {
        ...state,
        tickers: {
          ...state.tickers,
          [action.payload.pair]: action.payload.ticker,
        },
      };
    case 'UPDATE_DEPTH':
      return {
        ...state,
        depth: {
          ...state.depth,
          [action.payload.pair]: action.payload.depth,
        },
      };
    case 'SET_SELECTED_PAIR':
      return {
        ...state,
        selectedPair: action.payload,
      };
    default:
      return state;
  }
}

interface MarketDataContextValue {
  state: MarketDataState;
  dispatch: React.Dispatch<MarketDataAction>;
}

const MarketDataContext = createContext<MarketDataContextValue | undefined>(undefined);

export function MarketDataProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(marketDataReducer, initialState);
  const { state: wsState, send } = useWebSocket();
  const { addNotification } = useNotifications();

  useEffect(() => {
    if (wsState.connected) {
      send({ type: 'subscribe', data: { channel: 'ticker', pairs: ['BBC/USD'] } });
      send({ type: 'subscribe', data: { channel: 'depth', pairs: ['BBC/USD'] } });
      
      addNotification({
        type: 'success',
        message: 'Connected to market data feed',
      });
    }
  }, [wsState.connected, send, addNotification]);

  useEffect(() => {
    if (wsState.lastMessage) {
      const { type, data } = wsState.lastMessage;
      
      switch (type) {
        case 'ticker':
          dispatch({ type: 'UPDATE_TICKER', payload: data });
          break;
        case 'depth':
          dispatch({ type: 'UPDATE_DEPTH', payload: data });
          break;
        default:
          break;
      }
    }
  }, [wsState.lastMessage]);

  return (
    <MarketDataContext.Provider value={{ state, dispatch }}>
      {children}
    </MarketDataContext.Provider>
  );
}

export function useMarketData() {
  const context = useContext(MarketDataContext);
  if (context === undefined) {
    throw new Error('useMarketData must be used within a MarketDataProvider');
  }
  return context;
}