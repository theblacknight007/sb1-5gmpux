import { useState, useEffect, useCallback } from 'react';
import { WebSocketMessage, WebSocketState } from '../types/websocket';

const WS_URL = 'wss://api.example.com/ws'; // Replace with actual WebSocket URL

export function useWebSocket() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [state, setState] = useState<WebSocketState>({
    connected: false,
    lastMessage: null,
  });

  const connect = useCallback(() => {
    try {
      const ws = new WebSocket(WS_URL);

      ws.onopen = () => {
        setState(prev => ({ ...prev, connected: true }));
      };

      ws.onclose = () => {
        setState(prev => ({ ...prev, connected: false }));
      };

      ws.onmessage = (event) => {
        const message: WebSocketMessage = JSON.parse(event.data);
        setState(prev => ({ ...prev, lastMessage: message }));
      };

      setSocket(ws);
    } catch (error) {
      console.error('WebSocket connection error:', error);
    }
  }, []);

  const disconnect = useCallback(() => {
    if (socket) {
      socket.close();
      setSocket(null);
    }
  }, [socket]);

  const send = useCallback((message: WebSocketMessage) => {
    if (socket?.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(message));
    }
  }, [socket]);

  useEffect(() => {
    connect();
    return () => {
      disconnect();
    };
  }, [connect, disconnect]);

  return { state, send };
}