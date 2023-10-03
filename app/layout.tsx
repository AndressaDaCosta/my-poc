import Head from "next/head"

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
						href="./api/manifest.ts"
					/>
					<meta
						name="theme-color"
						content="#fff"
					/>
					<link
						rel="apple-touch-icon"
						href="/icon-192x192.png"
					/>

					<meta
						name="apple-mobile-web-app-capable"
						content="yes"
					/>
					<link
						href="/icon-192x192.png"
						sizes="2048x2732"
						rel="apple-touch-startup-image"
					/>
					<meta
						name="apple-mobile-web-app-title"
						content="Nome do seu aplicativo"
					/>
					<meta
						name="apple-mobile-web-app-capable"
						content="yes"
					/>
					<meta
						name="apple-mobile-web-app-status-bar-style"
						content="default"
					/>
				</Head>
				<body>{children}</body>
			</html>
		</>
	)
}
