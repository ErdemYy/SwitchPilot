import React from 'react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav className="flex items-center text-xs text-slate-400 space-x-2">
      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="text-slate-600">/</span>}
            {isLast || !item.href ? (
              <span className={`font-medium ${isLast ? 'text-slate-200' : 'text-slate-400'}`}>
                {item.label}
              </span>
            ) : (
              <a href={item.href} className="hover:text-slate-200 transition-colors">
                {item.label}
              </a>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};
