import { forwardRef, useState } from 'react';

import InputText, { InputTextProps } from './InputText.tsx';
import styles from './InputPassword.module.scss';

interface InputPasswordProps extends InputTextProps {}

const InputPassword = forwardRef<HTMLInputElement, InputPasswordProps>(({
  label,
  placeholder,
  disabled,
  errorMessage,
  onKeyDown,
  ...rest
}, ref) => {
  const [showPassword, setShowPassword] = useState(false);
  
  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  return (
    <div
      className={styles.inputPasswordWrap}
    >
      <InputText
        type={showPassword ? 'text' : 'password'}
        label={label}
        placeholder={placeholder}
        disabled={disabled}
        errorMessage={errorMessage}
        onKeyDown={onKeyDown}
        ref={ref}
        {...rest}
      ></InputText>
      <button
        type="button"
        className={styles.btnVisibility}
        onClick={togglePasswordVisibility}
      >
        <span className="material-symbols-outlined">
          { showPassword ? 'visibility_off' : 'visibility' }
        </span>
      </button>
    </div>
  );
});

InputPassword.displayName = 'InputPassword';

export default InputPassword;