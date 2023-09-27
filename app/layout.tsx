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
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
