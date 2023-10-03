import Head from "next/head"
import type { Metadata } from "next";

// const APP_NAME = "PWA App";
// const APP_DEFAULT_TITLE = "My Awesome PWA App";
// const APP_TITLE_TEMPLATE = "%s - PWA App";
// const APP_DESCRIPTION = "Best PWA app in the world!";

// export const metadata: Metadata = {
//   applicationName: APP_NAME,
//   title: {
//     default: APP_DEFAULT_TITLE,
//     template: APP_TITLE_TEMPLATE,
//   },
//   description: APP_DESCRIPTION,
//   manifest: "/manifest.json",
//   themeColor: "#FFFFFF",
//   appleWebApp: {
//     capable: true,
//     statusBarStyle: "default",
//     title: APP_DEFAULT_TITLE,
//     // startUpImage: [],
//   },
//   formatDetection: {
//     telephone: false,
//   },
//   openGraph: {
//     type: "website",
//     siteName: APP_NAME,
//     title: {
//       default: APP_DEFAULT_TITLE,
//       template: APP_TITLE_TEMPLATE,
//     },
//     description: APP_DESCRIPTION,
//   },
//   twitter: {
//     card: "summary",
//     title: {
//       default: APP_DEFAULT_TITLE,
//       template: APP_TITLE_TEMPLATE,
//     },
//     description: APP_DESCRIPTION,
//   },
// };
// export const metadata = {
// 	title: "Site Clientes",
// 	description: "Descrição Site Clientes"
// }

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
				</Head>
				<body>{children}</body>
			</html>
		</>
	)
}
