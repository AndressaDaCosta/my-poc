import Head from "next/head"

export const metadata = {
	title: "Site Clientes",
	description: "Descrição Site Clientes"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
  <>
    <html lang="en">
    <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
      </Head>
      <body>{children}</body>
    </html>
    </>
  );
}
