import { useState, useCallback } from 'react';
import { OrderFormData } from '../types/trading';
import { parseInputNumber, calculateTotal, formatNumber } from '../utils/number';
import { submitOrder } from '../services/orderService';
import { useNotifications } from '../context/NotificationContext';
import { useWallet } from '../context/WalletContext';

const initialFormData: OrderFormData = {
  type: 'limit',
  side: 'buy',
  price: '',
  amount: '',
  total: '',
};

export function useOrderForm() {
  const [formData, setFormData] = useState<OrderFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { addNotification } = useNotifications();
  const { wallet } = useWallet();

  const handleInputChange = useCallback((field: keyof OrderFormData, value: string) => {
    const updates: Partial<OrderFormData> = { [field]: value };

    if (field === 'price' || field === 'amount') {
      const price = field === 'price' ? parseInputNumber(value) : parseInputNumber(formData.price);
      const amount = field === 'amount' ? parseInputNumber(value) : parseInputNumber(formData.amount);
      updates.total = formatNumber(calculateTotal(price, amount));
    }

    setFormData(prev => ({ ...prev, ...updates }));
  }, [formData.price]);

  const validateForm = useCallback((): string | null => {
    if (!wallet.isConnected) {
      return 'Please connect your wallet first';
    }

    const amount = parseInputNumber(formData.amount);
    const price = parseInputNumber(formData.price);
    const total = parseInputNumber(formData.total);

    if (amount <= 0) {
      return 'Please enter a valid amount';
    }

    if (formData.type === 'limit' && price <= 0) {
      return 'Please enter a valid price';
    }

    if (formData.side === 'buy' && total > wallet.balance.usd) {
      return 'Insufficient USD balance';
    }

    if (formData.side === 'sell' && amount > wallet.balance.bbc) {
      return 'Insufficient BBC balance';
    }

    return null;
  }, [formData, wallet]);

  const handleSubmit = async () => {
    const error = validateForm();
    if (error) {
      addNotification({ type: 'error', message: error });
      return;
    }

    setIsSubmitting(true);
    try {
      const success = await submitOrder(formData);
      if (success) {
        addNotification({
          type: 'success',
          message: `${formData.side === 'buy' ? 'Buy' : 'Sell'} order placed successfully`,
        });
        setFormData(initialFormData);
      } else {
        addNotification({
          type: 'error',
          message: 'Failed to place order. Please try again.',
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    handleInputChange,
    handleSubmit,
    setFormData,
  };
}