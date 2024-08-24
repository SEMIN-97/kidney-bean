import React, { forwardRef } from 'react';
import clsx from 'clsx';

import styles from './InputText.module.scss';

interface InputTextProps {
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(({
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
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        ref={ref}
        onKeyDown={onKeyDown}
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