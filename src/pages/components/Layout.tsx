// components/Layout.tsx
import React, { ReactNode } from 'react';
import Head from 'next/head';

type LayoutProps = {
  children: ReactNode;
  title: string;
  description: string;
  image: string;
};

export default function Layout({ children, title, description, image }: LayoutProps) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href={image} />
        <meta name="description" content={description} />
        {/* Outras meta tags e scripts gerais */}
      </Head>
      {children}
    </div>
  );
}
