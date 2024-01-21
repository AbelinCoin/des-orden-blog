import React from 'react';
import { ClerkProvider } from '@clerk/nextjs';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>Des-order-blog</title>
    </Head>
    <ClerkProvider>
      <Header />
      {children}
      <Footer />
    </ClerkProvider>
  </>
);

export default Layout;
