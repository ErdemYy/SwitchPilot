"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const react_1 = __importDefault(require("react"));
require("../styles/globals.css");
exports.metadata = {
    title: 'SwitchPilot - Multi-Vendor Network Automation Platform',
    description: 'Enterprise Multi-Vendor Network Management & Automation Platform',
};
function RootLayout({ children, }) {
    return (<html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 min-h-screen antialiased">
        {children}
      </body>
    </html>);
}
