"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Select = void 0;
const react_1 = __importDefault(require("react"));
const Select = ({ label, options, error, className = '', ...props }) => {
    return (<div className="w-full">
      {label && <label className="block text-xs font-medium text-slate-400 mb-1.5">{label}</label>}
      <select className={`w-full px-3 py-2 bg-[#111827] border border-white/10 rounded-md text-sm text-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all ${className}`} {...props}>
        {options.map((opt) => (<option key={opt.value} value={opt.value} className="bg-[#111827] text-slate-100">
            {opt.label}
          </option>))}
      </select>
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>);
};
exports.Select = Select;
