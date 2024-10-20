import React, { forwardRef, HTMLInputTypeAttribute } from 'react';
import clsx from 'clsx';

import styles from './InputText.module.scss';

export interface InputTextProps {
  type?: HTMLInputTypeAttribute;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(({
  type = 'text',
  label,
  placeholder,
  disabled,
  errorMessage,
  onKeyDown,
  ...rest
}, ref) => {
  return (
    <div className={clsx(
      styles.inputWrap,
      {
        [styles.error]: errorMessage
      }
    )}>
      {
        label && <label>{ label }</label>
      }
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onKeyDown={onKeyDown}
        ref={ref}
        {...rest}
      />
      {
        errorMessage && <p className={styles.errorMessage}>{ errorMessage }</p>
      }
    </div>
  );
});

InputText.displayName = 'InputText';

export default InputText;