// pages/_app.tsx
import React from "react"
import { AppProps } from "next/app"

// import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}

export default MyApp

// <Head>
// 			<title>Site Clientes</title>
// 			<link
// 							rel="icon"
// 							href="/convem.ico"
// 						/>
// 						<meta
// 							name="description"
// 							content="descrição site clientes"
// 						/>
// </Head>
