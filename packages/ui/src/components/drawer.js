"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Drawer = void 0;
const react_1 = __importDefault(require("react"));
const Drawer = ({ isOpen, onClose, title, position = 'right', children, }) => {
    if (!isOpen)
        return null;
    const posStyle = position === 'left' ? 'left-0' : 'right-0';
    return (<div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs transition-opacity">
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true"/>
      <div className={`fixed inset-y-0 ${posStyle} max-w-full flex w-80 sm:w-96 bg-[#111827] border-l border-white/10 shadow-2xl p-5 flex-col space-y-4 z-50`}>
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          {title && <h3 className="text-base font-semibold text-slate-100">{title}</h3>}
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200 p-1 rounded hover:bg-slate-800 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto">{children}</div>
      </div>
    </div>);
};
exports.Drawer = Drawer;
