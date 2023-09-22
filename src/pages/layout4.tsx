// pages/layout2.tsx
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Layout4() {
 
  return (
    <div>
      <Head>
        <title>Servicos</title>
        <link rel="icon" href="/servicos.ico"/>

        {/* Meta tags OG para compartilhamento em redes sociais */}
        <meta property="og:title" content='servicos' />
        <meta property="og:description" content="descricao servicos" />
        <meta property="og:image" content="/servicos.ico" />
        <meta property="og:url" content={`www.servicos-exemplo.com.br`} />
        <meta property="og:type" content="website" />
      </Head>
      <h1>Layout 4</h1>
      <img src="/servicos.ico" alt={'Ícone de servicos'} />
    </div>
  );
}
