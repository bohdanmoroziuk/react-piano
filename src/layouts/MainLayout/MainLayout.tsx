import { ReactNode } from 'react';

import Logo from 'layouts/MainLayout/components/Logo';

import styles from 'layouts/MainLayout/MainLayout.module.css';

export interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main className={styles.content}>
        {children}
      </main>
    </>
  )
}
