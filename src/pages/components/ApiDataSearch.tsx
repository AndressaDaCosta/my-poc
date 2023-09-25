// id: 1248 -> Casino(diversidade) / id: 1243 -> bingoaovivo / id: 800 -> Luvas Web / id: 539 -> crismarmercado id: 1255 -> reportes-regulatorios=serviços

// pages -> ApiDataSearch.tsx
import React, { useState } from "react"
import axios from "axios"
import Head from "next/head"
import styles from "./ApiDataSearch.module.css"

interface SiteData {
	domain: string;
	storeType: string;
	theme: {
	  id: number;
	};
	sections: {
	  configurations: {
		title: string;
		favicon: string;
		description: string;
	  };
	};
  }
 const ApiDataSearch = () => {
	const [siteId, setSiteId] = useState("")
	const [siteData, setSiteData] = useState<SiteData | null>(null);
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSiteId(event.target.value)
	}

	const fetchData = async () => {
		setLoading(true)
		try {
			const response = await axios.get(
				`https://api-site-config.convem.me/V1/config-json/${siteId}`
			)
			const data = response.data.data
			setSiteData(data)
			setError("")
		} catch (error) {
			console.error(
				"Erro ao buscar dados da API. Tente novamente.",
				error
			)
			setSiteData(null)
			setError("Id Inválido.")
		} finally {
			setLoading(false)
		}
	}

	const handleButtonClick = () => {
		fetchData()
	}

	const faviconFromApi = siteData?.sections.configurations.favicon

	return (
		<div className={`${styles.container} ${styles.cardContainer}`}>
			<div className={styles.logoContainer}>
				<img
					src="/convem-logo.svg"
					alt="Logo"
					className={styles.logo}
				/>
			</div>

			<Head>
				<title>
					{siteData?.sections.configurations.title || "SiteClientes"}
				</title>
				<link
					rel="icon"
					href={faviconFromApi || "/convem.ico"}
				/>
				<meta
					name="description"
					content={
						siteData?.sections.configurations.description ||
						"Exemplo de descrição"
					}
				/>
			</Head>
			<div className={styles.inputContainer}>
				{/* <h2>Digite o ID do Site e veja as informações retornadas da API</h2> */}
				<input
					type="text"
					placeholder="Digite o ID do site e busque os dados na API"
					value={siteId}
					onChange={handleInputChange}
					className={styles.input}
				/>
				<button
					onClick={fetchData}
					className={styles.button}>
					{loading ? "Carregando..." : "Buscar Dados"}
				</button>
			</div>
			{error && (
				<p style={{ color: "red" }}>{error}</p> // Mostrar mensagem de erro em vermelho
			)}
			{siteData && (
				<div className={styles.cardInfo}>
					<p>
						<strong>Domínio:</strong> {siteData.domain}
					</p>
					<p>
						<strong>Tipo de Site:</strong> {siteData.storeType}
					</p>
					<p>
						<strong>Id Layout:</strong> {siteData.theme?.id}
					</p>
					<p>
						<strong>Titulo:</strong>{" "}
						{siteData.sections.configurations?.title}
					</p>
					<p>
						<strong>Favicon: </strong>
						<img
							src={siteData.sections.configurations?.favicon}
							alt="Favicon"
							width={40}
						/>
					</p>
					<p>
						<strong> Descrição: </strong>
						{siteData.sections.configurations?.description}
					</p>
				</div>
			)}
		</div>
	)
}

export default ApiDataSearch
