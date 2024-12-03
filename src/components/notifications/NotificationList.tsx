import React from 'react';
import { AlertCircle, CheckCircle, Info, X } from 'lucide-react';
import { useNotifications, Notification } from '../../context/NotificationContext';

function NotificationItem({ notification }: { notification: Notification }) {
  const { removeNotification } = useNotifications();

  const icons = {
    success: <CheckCircle className="h-5 w-5 text-green-400" />,
    error: <AlertCircle className="h-5 w-5 text-red-400" />,
    info: <Info className="h-5 w-5 text-blue-400" />,
  };

  const colors = {
    success: 'bg-green-50 border-green-200',
    error: 'bg-red-50 border-red-200',
    info: 'bg-blue-50 border-blue-200',
  };

  return (
    <div className={`p-4 rounded-lg border ${colors[notification.type]} shadow-sm`}>
      <div className="flex items-start">
        <div className="flex-shrink-0">{icons[notification.type]}</div>
        <div className="ml-3 w-0 flex-1">
          <p className="text-sm text-gray-800">{notification.message}</p>
        </div>
        <div className="ml-4 flex-shrink-0 flex">
          <button
            onClick={() => removeNotification(notification.id)}
            className="rounded-md inline-flex text-gray-400 hover:text-gray-500"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

export function NotificationList() {
  const { notifications } = useNotifications();

  if (notifications.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 w-96 space-y-2 z-50">
      {notifications.map(notification => (
        <NotificationItem key={notification.id} notification={notification} />
      ))}
    </div>
  );
}