import React from 'react';

// Utility function to combine class names
function cn(...classes: (string | undefined | null | boolean)[]): string {
  return classes.filter(Boolean).join(' ');
}

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'underline';
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant = 'default', type = 'text', ...props }, ref) => {
    const baseStyles = 'flex w-full text-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50';
    
    const variantStyles = {
      default: 'h-9 rounded-md border border-gray-300 bg-transparent px-3 py-1 shadow-sm focus:border-black',
      underline: 'h-9 bg-transparent px-0 py-3 border-0 border-b border-gray-600 focus:border-white'
    };
    
    return (
      <input
        type={type}
        className={cn(
          baseStyles,
          variantStyles[variant],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export { Input };