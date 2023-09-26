// pages/layout.tsx (Layout)

import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import LoadingComponent from "./components/LoadingComponent"
import ErrorComponent from "./components/ErrorComponent"
import styles from "../styles/layouts.module.css"

import Head from "next/head"
import Link from "next/link"

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

const Layout2 = () => {
	const router = useRouter()
	const { siteId } = router.query

	const [siteData, setSiteData] = useState<SiteData | null>(null)
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState("")

	useEffect(() => {
		if (!siteId) {
			setError("ID não encontrado na URL.")
			return
		}

		setLoading(true)
		setError("")

		const fetchData = async () => {
			try {
				const response = await fetch(
					`https://api-site-config.convem.me/V1/config-json/${siteId}`
				)
				if (response.status === 404) {
					throw new Error("ID não encontrado na API.")
				}
				const data = await response.json()
				setSiteData(data.data)
			} catch (err) {
				setError(
					err instanceof Error
						? err.message
						: "Erro na busca de dados."
				)
			} finally {
				setLoading(false)
			}
		}

		fetchData()
	}, [siteId])

	if (loading) {
		return <LoadingComponent />
	}

	if (error) {
		return <ErrorComponent message={error} />
	}

	if (siteData) {
		return (
			<div>
				<div className={`${styles.container} ${styles.cardContainer}`}>
					<Head>
						<title>{siteData?.sections.configurations.title}</title>
						<link
							rel="icon"
							href={siteData?.sections.configurations.favicon}
						/>
						<meta
							name="description"
							content={
								siteData?.sections.configurations.description
							}
						/>
						<meta
							property="og:title"
							content={siteData?.sections.configurations.title}
						/>
						<meta
							property="og:description"
							content={
								siteData?.sections.configurations.description
							}
						/>
						<meta
							property="og:image"
							content={siteData?.sections.configurations.favicon}
						/>
						<meta
							property="og:url"
							content={`https://www.${siteData?.domain}`}
						/>
						<meta
							property="og:type"
							content="website"
						/>
					</Head>
					<div className={styles.cardInfo}>
						<p>
							<strong>Domínio:</strong> {siteData?.domain}
						</p>
						<p>
							<strong>Tipo de Site:</strong> {siteData?.storeType}
						</p>
						<p>
							<strong>Id Layout:</strong> {siteData?.theme?.id}
						</p>
						<p>
							<strong>Titulo:</strong>{" "}
							{siteData?.sections.configurations?.title}
						</p>
						<p>
							<strong>Favicon: </strong>
							<img
								src={siteData?.sections.configurations?.favicon}
								alt="Favicon"
								width={40}
							/>
						</p>
						<p>
							<strong> Descrição: </strong>
							{siteData?.sections.configurations?.description}
						</p>
						<Link href="/">Voltar para a Página Inicial</Link>

					</div>
					)
				</div>
			</div>
		)
	}

	return null
}

export default Layout2
