// / pages/layout2.tsx
import React, { useEffect, useState } from 'react';
import Head from 'next/head';

export default function Layout2() {
  const [data, setData] = useState({
    title: '',
    description: '',
    image: '',
  });

  useEffect(() => {
    // Simulação de uma solicitação fetch para buscar dados do arquivo JSON
    fetch('/metadata.json')
      .then((response) => response.json())
      .then((jsonData) => {
        const layoutData = jsonData.layout2;
        setData({
          title: layoutData.title,
          description: layoutData.description,
          image: layoutData.image,
        });
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div>
      <Head>
        <title>{data.title}</title>
        <link rel="icon" href={data.image} />

        {/* Meta tags OG para compartilhamento em redes sociais */}
       <meta property="og:title" content="Título Moda" />
        <meta property="og:description" content="Descrição Moda" />
        <meta property="og:image" content="/moda.ico" />
        <meta property="og:url" content="www.moda-exemplo.com.br" />
        <meta property="og:type" content="website" />
      </Head>
      <h1>Layout 2</h1>
      <img src={data.image} alt={`Ícone de ${data.title}`} />
    </div>
  );
}