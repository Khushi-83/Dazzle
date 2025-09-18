import React from 'react';
import { cn } from '@/lib/utils';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'underline';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant = 'default', ...props }, ref) => {
    const baseStyles = 'flex min-h-[60px] w-full text-sm transition-colors placeholder:text-gray-400 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 resize-none';
    
    const variantStyles = {
      default: 'rounded-md border border-gray-300 bg-transparent px-3 py-2 shadow-sm focus:border-black',
      underline: 'bg-transparent px-0 py-3 border-0 border-b border-gray-600 focus:border-white'
    };
    
    return (
      <textarea
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

Textarea.displayName = 'Textarea';

export { Textarea };