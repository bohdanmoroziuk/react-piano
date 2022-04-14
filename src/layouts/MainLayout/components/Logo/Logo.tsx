import styles from 'layouts/MainLayout/components/Logo/Logo.module.css';

export default function Logo() {
  return (
    <h1 className={styles.logo}>
      <span role="img" aria-label="metal hand emoji">
        🤘
      </span>
      <span role="img" aria-label="musical keyboard emoji">
        🎹
      </span>
      <span role="img" aria-label="musical notes emoji">
        🎶
      </span>
    </h1>
  );
}
