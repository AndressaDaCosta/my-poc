// pages/index.tsx
import Head from "next/head"
import { Inter } from "next/font/google"
import Link from "next/link"
import ApiDataSearch from "./components/ApiDataSearch"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<>
			<ApiDataSearch />
		</>
	)
}
