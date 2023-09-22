// pages/layout3.tsx
import React from 'react';
import Head from 'next/head';
import layoutData from '../../public/metadata.json';


  
export default function Layout3() {
  const data = layoutData.layout3;
  return (
    <div>
        <Head>
        <title>{data.title}</title>
        <link rel="icon" href={data.image} /> 
        
        {/* Meta tags OG para compartilhamento em redes sociais */}
        <meta property="og:title" content="Título cassino" />
        <meta property="og:description" content="Descrição cassino" />
        <meta property="og:image" content="/cassino.ico" />
        <meta property="og:url" content="www.cassino-exemplo.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <h1> Layout 3</h1>
      <img src="/cassino.ico" alt="Ícone de cassino" />
    </div>
  );
}