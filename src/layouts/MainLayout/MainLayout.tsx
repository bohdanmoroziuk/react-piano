import { ReactNode } from 'react';

import Logo from 'layouts/MainLayout/components/Logo';
import ThemeSwitcher from 'layouts/MainLayout/components/ThemeSwitcher';

import styles from 'layouts/MainLayout/MainLayout.module.css';

export interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <ThemeSwitcher />
      <header>
        <Logo />
      </header>
      <main className={styles.content}>
        {children}
      </main>
    </>
  )
}
