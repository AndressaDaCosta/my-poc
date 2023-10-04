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
						href="/manifest.webmanifest"
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
