import styles from 'layouts/MainLayout/components/Footer/Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {currentYear}
    </footer>
  );
}
