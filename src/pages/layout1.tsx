// pages/layout1.tsx
import React, { useEffect, useState } from "react"
import Head from "next/head"
import NextImage from "./components/NextImage"
// import layoutData from '../../public/metadata.json';
import ImagemPesadaSvg from "../../assets/imagem-pesada.svg"

export default function Layout1() {
	// const data = layoutData.layout1;
	const [data, setData] = useState({
		title: "",
		description: "",
		image: ""
	})

	useEffect(() => {
		// Simulação de uma solicitação fetch para buscar dados do arquivo JSON
		fetch("/metadata.json")
			.then((response) => response.json())
			.then((jsonData) => {
				const layoutData = jsonData.layout1
				setData({
					title: layoutData.title,
					description: layoutData.description,
					image: layoutData.image
				})
			})
			.catch((error) => {
				console.error("Erro ao buscar dados:", error)
			})
	}, [])

	return (
		<div>
			<Head>
				<title>{data.title}</title>
				<link
					rel="icon"
					href={data.image}
				/>

				{/* Meta tags OG para compartilhamento em redes sociais como facebook e whatsapp*/}
				<meta
					property="og:title"
					content={data.title}
				/>
				<meta
					property="og:description"
					content={data.description}
				/>
				<meta
					property="og:image"
					content={data.image}
				/>
				<meta
					property="og:url"
					content={`www.${data.title}-exemplo.com.br`}
				/>
				<meta
					property="og:type"
					content="website"
				/>
			</Head>
			<img
				title="favicon"
				src={data.image}
				alt={`Ícone de ${data.title}`}
			/>
			<h1> Layout 1</h1>

			<div style={{ display: "flex", alignItems: "center" }}>
				<div style={{ textAlign: "center" }}>
					<NextImage />
				</div>
				<div style={{ textAlign: "center" }}>
					<h2>Imagem HTML</h2>
					<img
						src="/assets/imagem-pesada.svg"
						width={300}
						height={100}
						alt="imagem img"
					/>
				</div>
			</div>
		</div>
	)
}
