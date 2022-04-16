import { ThemeProvider } from 'contexts/theme';

import MainLayout from 'layouts/MainLayout';
import Main from 'components/Main';

import styles from 'App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <ThemeProvider>
        <MainLayout>
          <Main />
        </MainLayout>
      </ThemeProvider>
    </div>
  )
}
