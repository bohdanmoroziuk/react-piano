import MainLayout from 'layouts/MainLayout';
import Main from 'components/Main';

import styles from 'App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <MainLayout>
        <Main />
      </MainLayout>
    </div>
  )
}
