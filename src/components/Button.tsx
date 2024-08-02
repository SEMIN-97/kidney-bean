import clsx from 'clsx';

import styles from './Button.module.scss';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'outlined';
  size?: 'sm' | 'md';
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  label,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled
}: ButtonProps) {
  return (
    <button type="button"
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