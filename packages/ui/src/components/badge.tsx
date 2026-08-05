import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'primary';
  size?: 'sm' | 'md' | 'lg';
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  size = 'md',
  className = '',
  ...props
}) => {
  const variantStyles = {
    success: 'bg-emerald-950/80 text-emerald-400 border-emerald-800',
    warning: 'bg-amber-950/80 text-amber-400 border-amber-800',
    danger: 'bg-red-950/80 text-red-400 border-red-800',
    info: 'bg-cyan-950/80 text-cyan-400 border-cyan-800',
    neutral: 'bg-slate-800 text-slate-300 border-slate-700',
    primary: 'bg-blue-950/80 text-blue-400 border-blue-800',
  };

  const sizeStyles = {
    sm: 'text-[10px] px-2 py-0.5',
    md: 'text-xs px-2.5 py-0.5',
    lg: 'text-sm px-3 py-1',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium border ${variantStyles[variant] || variantStyles.neutral} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
