"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Card = void 0;
const react_1 = __importDefault(require("react"));
const Card = ({ title, subtitle, children, className = '', ...props }) => {
    return (<div className={`bg-slate-900 border border-slate-800 rounded-lg p-5 shadow-lg ${className}`} {...props}>
      {(title || subtitle) && (<div className="mb-4">
          {title && <h3 className="text-lg font-semibold text-slate-100">{title}</h3>}
          {subtitle && <p className="text-sm text-slate-400 mt-1">{subtitle}</p>}
        </div>)}
      {children}
    </div>);
};
exports.Card = Card;
