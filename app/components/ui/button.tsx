import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  /** Accessible label for icon buttons or buttons without visible text */
  'aria-label'?: string;
  /** Tooltip text for the button */
  title?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', size = 'default', children, 'aria-label': ariaLabel, title, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50';
    
    const variantStyles = {
      default: 'bg-black text-white hover:bg-gray-800',
      outline: 'border border-gray-300 bg-transparent text-black hover:bg-gray-50',
      ghost: 'hover:bg-gray-100 text-black',
      secondary: 'bg-gray-100 text-black hover:bg-gray-200'
    };
    
    const sizeStyles = {
      default: 'h-9 px-4 py-2',
      sm: 'h-8 px-3 text-xs',
      lg: 'h-10 px-8',
      icon: 'h-9 w-9'
    };
    
    // Check if this is an icon button (no children text) and ensure accessibility
    const isIconButton = size === 'icon' || (!children || (typeof children === 'string' && children.trim() === ''));
    const needsAriaLabel = isIconButton && !ariaLabel && !title;
    
    if (process.env.NODE_ENV === 'development' && needsAriaLabel) {
      console.warn('Button: Icon buttons or buttons without visible text should have either aria-label or title attribute for accessibility.');
    }

    return (
      <button
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        aria-label={ariaLabel}
        title={title}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };