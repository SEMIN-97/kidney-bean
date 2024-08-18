import clsx from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'sm' | 'md';
  type?: 'submit' | 'reset' | 'button';
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  label,
  variant = 'primary',
  size = 'md',
  type = 'button',
  onClick,
  disabled
}: ButtonProps) {
  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        styles[variant],
        styles[size]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      { label }
    </button>
  );
}