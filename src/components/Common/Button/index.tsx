import { type ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cn } from '@/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  const { className, leftIcon, rightIcon, children, disabled, type, ...rest } =
    props;

  return (
    <button
      ref={ref}
      // eslint-disable-next-line react/button-has-type
      type={type}
      className={cn(
        `rounded-6 bg-primary h-30 text-[14px] text-[black] flex items-center gap-10 justify-center`,
        disabled && 'cursor-not-allowed opacity-70',
        className,
      )}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
});

Button.displayName = 'Glue-Button';

export default Button;
