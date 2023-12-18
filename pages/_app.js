/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Head from 'next/head';

import '../styles/globals.scss';
import { Layout } from '../components';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Óscar Doval</title>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
