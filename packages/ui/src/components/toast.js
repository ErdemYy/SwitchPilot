'use client';
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToastProvider = ToastProvider;
exports.useToast = useToast;
const react_1 = __importStar(require("react"));
const ToastContext = (0, react_1.createContext)(undefined);
function ToastProvider({ children }) {
    const [toasts, setToasts] = (0, react_1.useState)([]);
    const showToast = (title, description, variant = 'info') => {
        const id = Math.random().toString(36).substring(2, 9);
        setToasts((prev) => [...prev, { id, title, description, variant }]);
        setTimeout(() => {
            removeToast(id);
        }, 4000);
    };
    const removeToast = (id) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    };
    return (<ToastContext.Provider value={{ toasts, showToast, removeToast }}>
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
            return (<div key={toast.id} className={`p-3 rounded-lg border shadow-xl pointer-events-auto transition-all transform translate-y-0 ${variantStyles}`}>
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs">{toast.title}</span>
                <button onClick={() => removeToast(toast.id)} className="text-xs opacity-60 hover:opacity-100 ml-2">
                  ✕
                </button>
              </div>
              {toast.description && (<p className="text-[11px] opacity-80 mt-1">{toast.description}</p>)}
            </div>);
        })}
      </div>
    </ToastContext.Provider>);
}
function useToast() {
    const context = (0, react_1.useContext)(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}
