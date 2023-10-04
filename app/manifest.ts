// manifest.ts

import { MetadataRoute } from 'next';

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  try {
    // Fazer uma chamada à sua API para obter os dados
    const response = await fetch('https://api-site-config.convem.me/V1/config-json/539');
    if (!response.ok) {
      throw new Error('Erro na solicitação à API');
    }
    const data = await response.json();

    // Usar os dados da API para gerar o manifesto dinâmico
    const dynamicManifest: MetadataRoute.Manifest = {
      name: data.data.sections.configurations?.title || 'Nome Padrão',
      short_name: data.data.sections.stores[0].name || 'Nome Curto Padrão',
      description: data.data.sections.configurations?.description || 'Descrição Padrão',
      start_url: '/',
      display: 'standalone',
      background_color: data.data.sections.banners[0]?.button_bg_color || '#ffffff',
      theme_color: data.data.sections.banners[0]?.button_text_color || '#000000',
      icons: [
        {
          src: data.data.sections.configurations?.favicon || '/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    };

    return dynamicManifest;
  } catch (error) {
    console.error(error);
    throw error;
  }
}