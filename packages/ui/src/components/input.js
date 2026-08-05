"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = void 0;
const react_1 = __importDefault(require("react"));
exports.Input = react_1.default.forwardRef(({ label, error, className = '', ...props }, ref) => {
    return (<div className="w-full">
        {label && <label className="block text-sm font-medium text-slate-300 mb-1">{label}</label>}
        <input ref={ref} className={`w-full px-3 py-2 bg-slate-950 border ${error ? 'border-red-500' : 'border-slate-800'} rounded-md text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} {...props}/>
        {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
      </div>);
});
exports.Input.displayName = 'Input';
