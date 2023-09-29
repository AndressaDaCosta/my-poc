"use client"

import { useEffect, useState } from "react"
import styles from "../styles/SiteComponent.module.css"

type SiteConfig = {
	data: {
		domain: string
		theme: {
			id: number
		}
		storeType: string
		sections: {
			configurations: {
				title: string
				favicon: string
				description: string
			}
		}
	}
}

type InstallPromptResult = {
	outcome: "accepted" | "dismissed"
	platform: string
}

export default function SiteComponent() {
	const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null)
	const [installPrompt, setInstallPrompt] = useState<any>(null)

	useEffect(() => {
		fetch(`https://api-site-config.convem.me/V1/config-json/539`)
			.then((response) => {
				if (!response.ok) {
					throw new Error("Erro na solicitação à API")
				}
				return response.json()
			})
			.then((data: SiteConfig) => {
				setSiteConfig(data)
			})
			.catch((error) => {
				console.error(error)
				setSiteConfig(null)
			})

		window.addEventListener("beforeinstallprompt", (e) => {
      console.log("Evento beforeinstallprompt disparado!");
			e.preventDefault()
			setInstallPrompt(e)
		})
	}, [])

	const handleInstallClick = () => {
		if (installPrompt) {
			installPrompt.prompt()
			installPrompt.userChoice.then(
				(choiceResult: InstallPromptResult) => {
					if (choiceResult.outcome === "accepted") {
						console.log("Usuário aceitou a instalação")
					}
					setInstallPrompt(null)
				}
			)
		}
	}

	if (!siteConfig) {
		return <div>Carregando...</div>
	}

	return (
		<div className={`${styles.container} ${styles.cardContainer}`}>
			<div className={styles.cardInfo}>
				<p>
					<strong>Domínio:</strong> {siteConfig.data.domain}
				</p>
				<p>
					<strong>Tipo de Site:</strong> {siteConfig.data.storeType}
				</p>
				<p>
					<strong>Id Layout:</strong> {siteConfig.data.theme?.id}
				</p>
				<p>
					<strong>Titulo:</strong>{" "}
					{siteConfig.data.sections.configurations?.title}
				</p>
				<p>
					<strong>Favicon: </strong>
					<img
						src={siteConfig.data.sections.configurations?.favicon}
						alt="Favicon"
						width={40}
					/>
				</p>
				<p>
					<strong> Descrição: </strong>
					{siteConfig.data.sections.configurations?.description}
				</p>
				<button onClick={handleInstallClick}>Baixar o App</button>
			</div>
		</div>
	)
}
