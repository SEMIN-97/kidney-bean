import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import SignInPage from './pages/signIn';
import styles from './App.module.scss';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={styles.app}>
        <SignInPage />
      </main>
    </QueryClientProvider>
  );
}

export default App;
