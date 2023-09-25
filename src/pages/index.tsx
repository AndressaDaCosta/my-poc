// pages/index.tsx

import { Inter } from "next/font/google"
import ApiDataSearch from "./components/ApiDataSearch"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
	return (
		<div>
			<Head>
				<title>Site Clientes</title>
				<link
					rel="icon"
					href={"/convem.ico"}
				/>
				<meta
					name="description"
					content={"Exemplo de descrição"}
				/>
				<meta
					property="og:title"
					content="Site Cliente"
				/>
				<meta
					property="og:description"
					content="Exemplo Descrição"
				/>
				<meta
					property="og:image"
					content="/convem.ico"
				/>
				<meta
					property="og:url"
					content="www.convem.com.br"
				/>
				<meta
					property="og:type"
					content="website"
				/>
			</Head>
			<ApiDataSearch />
		</div>
	)
}
