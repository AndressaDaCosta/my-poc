import Head from "next/head"

export const metadata = {
	title: "Site Clientes",
	description: "Descrição Site Clientes"
}

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<html lang="en">
				<Head>
					<link
						rel="manifest"
						href="/manifest.json"
					/>
				</Head>
				<body>{children}</body>
			</html>
		</>
	)
}
