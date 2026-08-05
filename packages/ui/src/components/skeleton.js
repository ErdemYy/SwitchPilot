"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = void 0;
const react_1 = __importDefault(require("react"));
const Skeleton = ({ className = '', variant = 'text' }) => {
    const variantStyles = {
        text: 'h-4 w-full rounded',
        card: 'h-32 w-full rounded-xl',
        circle: 'h-10 w-10 rounded-full',
    };
    return (<div className={`animate-pulse bg-slate-800/70 border border-white/5 ${variantStyles[variant]} ${className}`}/>);
};
exports.Skeleton = Skeleton;
