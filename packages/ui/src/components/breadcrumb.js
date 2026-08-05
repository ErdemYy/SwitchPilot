"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Breadcrumb = void 0;
const react_1 = __importDefault(require("react"));
const Breadcrumb = ({ items }) => {
    return (<nav className="flex items-center text-xs text-slate-400 space-x-2">
      {items.map((item, idx) => {
            const isLast = idx === items.length - 1;
            return (<react_1.default.Fragment key={idx}>
            {idx > 0 && <span className="text-slate-600">/</span>}
            {isLast || !item.href ? (<span className={`font-medium ${isLast ? 'text-slate-200' : 'text-slate-400'}`}>
                {item.label}
              </span>) : (<a href={item.href} className="hover:text-slate-200 transition-colors">
                {item.label}
              </a>)}
          </react_1.default.Fragment>);
        })}
    </nav>);
};
exports.Breadcrumb = Breadcrumb;
