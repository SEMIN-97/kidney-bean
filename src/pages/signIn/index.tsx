import EmailInputStep from './components/EmailInputStep.tsx';
import styles from './index.module.scss';

export default function SignInPage() {
  return (
    <section className={styles.signInPage}>
      <EmailInputStep />
    </section>
  );
}