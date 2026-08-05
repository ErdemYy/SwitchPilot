'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastMessage {
  id: string;
  title: string;
  description?: string;
  variant: ToastVariant;
}

interface ToastContextType {
  toasts: ToastMessage[];
  showToast: (title: string, description?: string, variant?: ToastVariant) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const showToast = (title: string, description?: string, variant: ToastVariant = 'info') => {
    const id = Math.random().toString(36).substring(2, 9);
    setToasts((prev) => [...prev, { id, title, description, variant }]);

    setTimeout(() => {
      removeToast(id);
    }, 4000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
      {/* Toast Notification Container */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col space-y-2 max-w-sm w-full pointer-events-none">
        {toasts.map((toast) => {
          const variantStyles = {
            success: 'bg-emerald-950 text-emerald-300 border-emerald-800',
            error: 'bg-red-950 text-red-300 border-red-800',
            warning: 'bg-amber-950 text-amber-300 border-amber-800',
            info: 'bg-slate-900 text-slate-200 border-white/10',
          }[toast.variant];

          return (
            <div
              key={toast.id}
              className={`p-3 rounded-lg border shadow-xl pointer-events-auto transition-all transform translate-y-0 ${variantStyles}`}
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs">{toast.title}</span>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-xs opacity-60 hover:opacity-100 ml-2"
                >
                  ✕
                </button>
              </div>
              {toast.description && (
                <p className="text-[11px] opacity-80 mt-1">{toast.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}
