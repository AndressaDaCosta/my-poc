// pages/_app.tsx
import React from 'react';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from './components/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  let title = '';
 let description = '';
 let image = '';

  // //  metadados com base na URL atual
  // if (router.pathname === '/') {
  //  title = 'Convem';
  //  description = 'site-generator';
  //  image = '/convem.ico'; 
  // }

  // else if (router.pathname === '/layout1') {
  //   title = 'Mercado';
  //   description = 'Descrição do Mercado';
  //   image = '/mercado.png'; 
  // }
  // else if (router.pathname === '/layout2') {
  //   title = 'Moda';
  //   description = 'Descrição de Moda';
  //   image = '/moda.ico';
  // }
  
  return (
    <Layout title={title} description={description} image={image}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
