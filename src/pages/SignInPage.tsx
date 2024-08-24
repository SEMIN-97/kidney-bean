import styles from './SignInPage.module.scss';
import SignInEmailForm from './SignInEmailForm.tsx';

export default function SignInPage() {
  return (
    <section className={styles.signInPage}>
      <div className={styles.heroText}>
        <h2>책에 대한 기록 <br /> 함께 해볼까요?</h2>
        <p>먼저 로그인이 필요해요 :)</p>
      </div>
      <SignInEmailForm />
    </section>
  );
}