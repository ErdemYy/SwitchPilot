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
exports.ContextMenu = void 0;
const react_1 = __importStar(require("react"));
const ContextMenu = ({ items, children }) => {
    const [visible, setVisible] = (0, react_1.useState)(false);
    const [position, setPosition] = (0, react_1.useState)({ x: 0, y: 0 });
    const handleContextMenu = (e) => {
        e.preventDefault();
        setVisible(true);
        setPosition({ x: e.clientX, y: e.clientY });
    };
    (0, react_1.useEffect)(() => {
        const handleClick = () => setVisible(false);
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);
    return (<div onContextMenu={handleContextMenu} className="inline-block w-full">
      {children}
      {visible && (<div className="fixed bg-[#172033] border border-white/10 rounded-lg shadow-2xl py-1.5 z-50 w-44 animate-in fade-in duration-100" style={{ top: position.y, left: position.x }}>
          {items.map((item, idx) => (<button key={idx} onClick={() => {
                    item.onClick();
                    setVisible(false);
                }} className={`w-full flex items-center gap-2 px-3 py-2 text-xs transition-colors ${item.danger
                    ? 'text-red-400 hover:bg-red-950/50'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-slate-100'}`}>
              {item.icon}
              <span>{item.label}</span>
            </button>))}
        </div>)}
    </div>);
};
exports.ContextMenu = ContextMenu;
