import { ReactNode } from 'react';

import Logo from 'layouts/MainLayout/components/Logo';
import Footer from 'layouts/MainLayout/components/Footer';

import styles from 'layouts/MainLayout/MainLayout.module.css';

export interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Logo />
      <main className={styles.content}>
        {children}
      </main>
      <Footer />
    </>
  )
}
