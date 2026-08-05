import React from 'react';

export interface SearchProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onShortcutClick?: () => void;
  shortcutHint?: string;
}

export const Search = React.forwardRef<HTMLInputElement, SearchProps>(
  ({ className = '', shortcutHint = '⌘K', onShortcutClick, ...props }, ref) => {
    return (
      <div className="relative w-full flex items-center">
        <svg
          className="absolute left-3 w-4 h-4 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          ref={ref}
          type="text"
          className={`w-full pl-9 pr-12 py-1.5 text-xs bg-[#111827] border border-white/10 rounded-md text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all ${className}`}
          placeholder="Search devices, tasks, configs..."
          {...props}
        />
        {shortcutHint && (
          <button
            type="button"
            onClick={onShortcutClick}
            className="absolute right-2.5 px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-white/10 rounded hover:bg-slate-700 transition-colors"
          >
            {shortcutHint}
          </button>
        )}
      </div>
    );
  },
);

Search.displayName = 'Search';
