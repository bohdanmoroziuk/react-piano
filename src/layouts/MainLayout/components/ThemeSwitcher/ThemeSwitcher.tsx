import { useTheme } from 'contexts/theme';

import styles from 'layouts/MainLayout/components/ThemeSwitcher/ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
  const { toggleTheme } = useTheme();

  return (
    <button
      className={styles.switcher}
      onClick={toggleTheme}
      type="button"
    >
      Toggle theme
    </button>
  );
}
