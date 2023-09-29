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
					<link
						rel="apple-touch-icon"
						href="/icon.png"></link>
					<meta
						name="theme-color"
						content="#fff"
					/>
				</Head>
				<body>{children}</body>
			</html>
		</>
	)
}
