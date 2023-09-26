// pages/_app.tsx
import React from "react"
import { AppProps } from "next/app"
import { useRouter } from "next/router"
import Layout from "./components/Layout"
import Head from "next/head" // Importe o componente Head do Next.js

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />
}



export default MyApp
