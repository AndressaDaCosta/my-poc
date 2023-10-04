"use client"

import Head from "next/head"
import { useEffect, useState } from "react"
import type { MetadataRoute } from "next/types"
import manifest from "./manifest"

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	const [manifestData, setManifestData] =
		useState<MetadataRoute.Manifest | null>(null)

	useEffect(() => {
		manifest()
			.then((data) => {
				setManifestData(data)
			})
			.catch((error) => {
				console.error(error)
			})
	}, [])

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
