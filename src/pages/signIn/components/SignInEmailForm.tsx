import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import InputText from '../../../components/InputText.tsx';
import Button from '../../../components/Button.tsx';
import styles from '../index.module.scss';
import { useValidateEmailMutation } from '../../../hooks/queries/useAuth.ts';

interface SignInForm {
  email: string;
}

export default function SignInEmailForm() {
  const { register, handleSubmit, setError, formState: { errors, isValid } } = useForm<SignInForm>({ mode: 'onBlur' });
  const { mutate } = useValidateEmailMutation();

  const onSubmit: SubmitHandler<SignInForm> = (data: SignInForm) => {
    mutate(data.email, {
      onError: () => {
        setError('email', { message: '이메일을 다시 확인해주세요' });
      }
    });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') {
      return;
    }

    handleSubmit(onSubmit);
  };

  return (
    <form
      className={styles.formSection}
      onSubmit={handleSubmit(onSubmit)}
    >
      <InputText
        placeholder="user@eamil.com"
        {...register('email', {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/,
            message: '이메일 형식을 확인해 주세요'
          }
        })}
        errorMessage={errors.email?.message}
        onKeyDown={handleKeyDown}
      />
      <Button type="submit" label="계속하기" disabled={!isValid} />
    </form>
  );
}