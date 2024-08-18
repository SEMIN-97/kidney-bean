import React, { useState } from 'react';

import InputText from '../components/InputText.tsx';
import Button from '../components/Button.tsx';
import styles from './SignInPage.module.scss';

export default function SignInPage() {
  const [email, setEmail] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <section className={styles.signInPage}>
      <div className={styles.heroText}>
        <h2>책에 대한 기록 <br /> 함께 해볼까요?</h2>
        <p>먼저 로그인이 필요해요 :)</p>
      </div>
      <form
        className={styles.formSection}
        onSubmit={handleSubmit}
      >
        <InputText
          value={email}
          placeholder="user@eamil.com"
          onChange={handleChange}
        />
        <Button type="submit" label="계속하기" />
      </form>

    </section>
  );

}