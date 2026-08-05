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
exports.Dropdown = void 0;
const react_1 = __importStar(require("react"));
const Dropdown = ({ trigger, items, align = 'right' }) => {
    const [isOpen, setIsOpen] = (0, react_1.useState)(false);
    const dropdownRef = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return (<div className="relative inline-block text-left" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (<div className={`absolute ${align === 'right' ? 'right-0' : 'left-0'} mt-2 w-48 bg-[#172033] border border-white/10 rounded-lg shadow-xl py-1.5 z-50 animate-in fade-in duration-150`}>
          {items.map((item, idx) => (<button key={idx} onClick={() => {
                    item.onClick();
                    setIsOpen(false);
                }} className={`w-full flex items-center gap-2 px-3 py-2 text-xs transition-colors ${item.variant === 'danger'
                    ? 'text-red-400 hover:bg-red-950/40'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-slate-100'}`}>
              {item.icon}
              <span>{item.label}</span>
            </button>))}
        </div>)}
    </div>);
};
exports.Dropdown = Dropdown;
