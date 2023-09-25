// id: 1248 -> Casino(diversidade) / id: 1243 -> bingoaovivo / id: 800 -> Luvas Web / id: 539 -> crismarmercado id: 1255 -> reportes-regulatorios=serviços
// 1234 - mercado

// pages/[siteId].tsx
import Head from "next/head"
import styles from "./[siteId].module.css"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"

interface SiteData {
	domain: string
	storeType: string
	theme: {
		id: number
	}
	sections: {
		configurations: {
			title: string
			favicon: string
			description: string
		}
	}
}
const SiteInfo = () => {
	const router = useRouter()
	const { siteId } = router.query

	const [siteData, setSiteData] = useState<SiteData | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")

	useEffect(() => {
		const fetchData = async () => {
			setLoading(true)
			try {
				const response = await fetch(
					`https://api-site-config.convem.me/V1/config-json/${siteId}`
				)
				const data = await response.json()
				setSiteData(data.data)
				setError("")
			} catch (error) {
				console.error("Erro ao buscar dados da API:", error)
				setSiteData(null)
				setError("ID Inválido.")
			} finally {
				setLoading(false)
			}
		}

		if (siteId) {
			fetchData()
		}
	}, [siteId])

	const faviconFromApi = siteData?.sections.configurations.favicon

	return (
		<div className={`${styles.container} ${styles.cardContainer}`}>
			<Head>
				<title>
					{siteData?.sections.configurations.title || "carregando"}
				</title>
				<link
					rel="icon"
					href={faviconFromApi}
				/>
				<meta
					name="description"
					content={
						siteData?.sections.configurations.description ||
						"carregando"
					}
				/>
			</Head>
			{loading ? (
				<h1>Carregando...</h1>
			) : error ? (
				<p style={{ color: "red" }}>{error}</p>
			) : siteData ? (
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
			) : null}
		</div>
	)
}

export default SiteInfo
