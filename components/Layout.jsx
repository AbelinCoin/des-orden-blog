import React from 'react';
import { ClerkProvider } from '@clerk/nextjs'
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <ClerkProvider>
      <Header />
      {children}
      <Footer />
    </ClerkProvider>
  </>
);

export default Layout;
