import React from 'react';
import { cn } from '../../lib/utils';

const Button = ({ className, variant = 'primary', size = 'md', ...props }) => {
  const variants = {
    primary: 'bg-brand text-white hover:bg-brand/90 shadow-lg shadow-brand/20',
    secondary: 'bg-white/10 text-white hover:bg-white/20 backdrop-blur-md border border-white/20',
    outline: 'border-2 border-brand text-brand hover:bg-brand hover:text-white',
    ghost: 'text-white/70 hover:text-white hover:bg-white/10'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg font-semibold'
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
};

export default Button;
