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
exports.TestConnectionModal = void 0;
const react_1 = __importStar(require("react"));
const TestConnectionModal = ({ isOpen, onClose, targetHost = '10.240.1.1', protocol = 'SSH', }) => {
    const [state, setState] = (0, react_1.useState)('idle');
    const [currentStep, setCurrentStep] = (0, react_1.useState)(0);
    if (!isOpen)
        return null;
    const steps = [
        { name: 'Queued in Connection Pipeline', desc: 'Preparing protocol adapter and vault token' },
        { name: 'Connecting to Socket', desc: `Establishing TCP socket on port ${protocol === 'SSH' ? 22 : 830}` },
        { name: 'Authenticating Credentials', desc: 'Verifying HashiCorp Vault SSH key signature' },
        { name: 'Negotiating Protocol Session', desc: 'Checking Scrapli / Banner compatibility' },
    ];
    const handleStartTest = () => {
        setState('running');
        setCurrentStep(0);
        setTimeout(() => setCurrentStep(1), 800);
        setTimeout(() => setCurrentStep(2), 1600);
        setTimeout(() => setCurrentStep(3), 2400);
        setTimeout(() => setState('success'), 3200);
    };
    return (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div className="relative w-full max-w-lg bg-[#111827] border border-white/10 rounded-xl shadow-2xl p-6 space-y-5">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div>
            <h3 className="text-lg font-bold text-slate-100">Test Network Connection</h3>
            <p className="text-xs text-slate-400">
              Simulates pipeline connection through Vault and Protocol Adapter
            </p>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-200 text-xl font-bold">
            &times;
          </button>
        </div>

        <div className="bg-[#172033] p-4 rounded-lg border border-white/5 space-y-2 text-xs text-slate-300">
          <div className="flex justify-between">
            <span className="text-slate-400">Target Host IP:</span>
            <span className="font-mono font-bold text-slate-100">{targetHost}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Protocol Adapter:</span>
            <span className="font-bold text-blue-400">{protocol}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-400">Credential Source:</span>
            <span className="text-slate-200">HashiCorp Vault Engine (KMS)</span>
          </div>
        </div>

        {/* Workflow Steps Indicator */}
        <div className="space-y-3 pt-1">
          {steps.map((s, idx) => {
            const isDone = state === 'success' || (state === 'running' && idx < currentStep);
            const isCurrent = state === 'running' && idx === currentStep;
            return (<div key={idx} className="flex items-center space-x-3 text-xs">
                <div className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-[11px] ${isDone
                    ? 'bg-emerald-500 text-slate-950'
                    : isCurrent
                        ? 'bg-blue-600 text-white animate-pulse'
                        : 'bg-slate-800 text-slate-500'}`}>
                  {isDone ? '✓' : idx + 1}
                </div>
                <div>
                  <div className={`font-semibold ${isCurrent ? 'text-blue-400' : 'text-slate-200'}`}>
                    {s.name}
                  </div>
                  <div className="text-[10px] text-slate-500">{s.desc}</div>
                </div>
              </div>);
        })}
        </div>

        {state === 'success' && (<div className="p-3 bg-emerald-950/50 border border-emerald-800 rounded-lg text-emerald-300 text-xs flex items-center justify-between">
            <span>Connection Test Passed Successfully</span>
            <span className="font-mono font-bold">Latency: 14ms</span>
          </div>)}

        <div className="flex justify-end space-x-2 pt-2 border-t border-white/10">
          <button onClick={onClose} className="px-4 py-2 text-xs bg-slate-800 text-slate-300 rounded hover:bg-slate-700">
            Close
          </button>
          {state !== 'running' && (<button onClick={handleStartTest} className="px-4 py-2 text-xs bg-blue-600 text-white font-semibold rounded hover:bg-blue-700">
              {state === 'success' ? 'Re-test Pipeline' : 'Start Connection Test'}
            </button>)}
        </div>
      </div>
    </div>);
};
exports.TestConnectionModal = TestConnectionModal;
