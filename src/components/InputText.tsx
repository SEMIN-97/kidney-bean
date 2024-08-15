import { ChangeEvent } from 'react';
import clsx from 'clsx';

import styles from './InputText.module.scss';

interface InputTextProps {
  label?: string;
  value: string;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({
  label,
  value,
  placeholder,
  disabled,
  errorMessage,
  onChange
}: InputTextProps) {

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
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {
        errorMessage && <p className={styles.errorMessage}>{ errorMessage }</p>
      }
    </div>
  );
}