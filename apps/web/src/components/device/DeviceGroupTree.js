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
exports.DeviceGroupTree = void 0;
const react_1 = __importStar(require("react"));
const TreeNode = ({ node, selectedGroupId, onSelectGroup, level = 0 }) => {
    const [expanded, setExpanded] = (0, react_1.useState)(true);
    const isSelected = selectedGroupId === node.id;
    const hasChildren = node.children && node.children.length > 0;
    return (<div className="space-y-1">
      <button onClick={() => onSelectGroup(node.id)} style={{ paddingLeft: `${level * 12 + 8}px` }} className={`w-full flex items-center justify-between py-1.5 pr-2 rounded text-xs transition-colors ${isSelected
            ? 'bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30'
            : 'text-slate-300 hover:bg-slate-800/60'}`}>
        <div className="flex items-center space-x-2 truncate">
          {hasChildren ? (<span onClick={(e) => {
                e.stopPropagation();
                setExpanded(!expanded);
            }} className="text-slate-500 hover:text-slate-200 cursor-pointer w-4 h-4 flex items-center justify-center font-bold">
              {expanded ? '▾' : '▸'}
            </span>) : (<span className="w-4"/>)}
          <span className="truncate">{node.name}</span>
        </div>
        <span className="text-[10px] text-slate-500 font-mono px-1.5 py-0.2 rounded bg-slate-900">
          {node.deviceCount}
        </span>
      </button>

      {hasChildren && expanded && (<div className="space-y-0.5">
          {node.children.map((child) => (<TreeNode key={child.id} node={child} selectedGroupId={selectedGroupId} onSelectGroup={onSelectGroup} level={level + 1}/>))}
        </div>)}
    </div>);
};
const DeviceGroupTree = ({ nodes, selectedGroupId, onSelectGroup, }) => {
    return (<div className="bg-[#172033] border border-white/10 rounded-xl p-3 space-y-2">
      <div className="flex items-center justify-between px-2 pb-2 border-b border-white/10">
        <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
          Device Groups
        </span>
        <button onClick={() => onSelectGroup('')} className="text-[10px] text-blue-400 hover:underline">
          Clear Selection
        </button>
      </div>
      <div className="space-y-0.5">
        {nodes.map((node) => (<TreeNode key={node.id} node={node} selectedGroupId={selectedGroupId} onSelectGroup={onSelectGroup}/>))}
      </div>
    </div>);
};
exports.DeviceGroupTree = DeviceGroupTree;
