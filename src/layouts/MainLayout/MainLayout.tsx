import { ReactNode } from 'react';

import Footer from 'layouts/MainLayout/components/Footer';

export interface MainLayoutProps {
  children?: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
