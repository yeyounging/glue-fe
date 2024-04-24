'use client';

import { InputHTMLAttributes, forwardRef, ChangeEvent } from 'react';
import { cn } from '@/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
  isClearable?: boolean;
  onValueChange?: (value: string) => void;
  onClear?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const {
    className,
    onValueChange,
    wrapperClassName,
    startContent,
    endContent,
    isClearable,
    onClear,
    ...rest
  } = props;

  const handleClear = () => {
    onValueChange?.('');
    onClear?.();
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    onValueChange?.(value);
  };

  return (
    <div className={cn('flex items-center', wrapperClassName)}>
      {startContent && startContent}
      {/* FIXME: 패딩값 수정  */}
      <input
        ref={ref}
        className={cn(
          'bg-transparent w-full p-5 focus:outline-none',
          className,
        )}
        onChange={handleChange}
        {...rest}
      />
      {isClearable && (
        // FIXME: 삭제 || 초기화 아이콘 추가
        <button type="button" onClick={handleClear}>
          x
        </button>
      )}
      {endContent && endContent}
    </div>
  );
});

Input.displayName = 'Glue-Input';

export default Input;
