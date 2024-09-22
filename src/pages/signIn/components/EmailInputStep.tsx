import SignInEmailForm from './SignInEmailForm.tsx';
import styles from './../index.module.scss';

export default function EmailInputStep() {
  return (
    <>
      <div className={styles.heroText}>
        <h2>책에 대한 기록 <br /> 함께 해볼까요?</h2>
        <p>먼저 로그인이 필요해요 :)</p>
      </div>
      <SignInEmailForm />
    </>
  );
}