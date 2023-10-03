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
			stores: {
				name: string
			}[]
			banners: {
				button_bg_color: string
				button_text_color: string
			}[]
		}
	}
}
type InstallPromptResult = {
	outcome: "accepted" | "dismissed"
	platform: string
}

function generateDynamicManifest(siteConfig: SiteConfig) {
	return {
		name: siteConfig.data.sections.configurations?.title || "Nome Padrão",
		short_name:
			siteConfig.data.sections.stores[0].name || "Nome Curto Padrão",
		start_url: "/",
		display: "standalone",
		background_color:
			siteConfig.data.sections.banners[0]?.button_bg_color || "#ffffff",
		theme_color:
			siteConfig.data.sections.banners[0]?.button_text_color || "#000000",
		icons: [
			{
				src:
					siteConfig.data.sections.configurations?.favicon ||
					"/icon-192x192.png",
				sizes: "192x192",
				type: "image/png",
				purpose: "any maskable"
			}
		]
	}
}

export default function SiteComponent() {
	const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null)
	const [setupButtonVisible, setSetupButtonVisible] = useState(false)
	const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
	const [manifest, setManifest] = useState<string | null>(null)

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
				console.log(data)

				const dynamicManifest = generateDynamicManifest(data)

				if (dynamicManifest) {
					const manifestString = JSON.stringify(dynamicManifest)

					const manifestBlob = new Blob([manifestString], {
						type: "application/json"
					})
					const manifestURL = URL.createObjectURL(manifestBlob)

					const existingManifest = document.querySelector(
						'link[rel="manifest"]'
					)
					if (existingManifest) {
						existingManifest.remove()
					}

					const manifestTag = document.createElement("link")
					manifestTag.rel = "manifest"
					manifestTag.href = manifestURL
					document.head.appendChild(manifestTag)

					setManifest(manifestString)
				}
			})
			.catch((error) => {
				console.error(error)
				setSiteConfig(null)
			})

		setSetupButtonVisible(true)
	}, [])

	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (e) => {
			e.preventDefault()
			setDeferredPrompt(e)
		})
	}, [])

	const isIos = () => {
		const userAgent = window.navigator.userAgent.toLowerCase()
		return /iphone|ipad|ipod/.test(userAgent)
	}

	const isInStandaloneMode = () =>
		"standalone" in window.navigator && window.navigator.standalone

	const installApp = async () => {
		if (deferredPrompt) {
			if (isIos() && !isInStandaloneMode()) {
				if (
					"standalone" in window.navigator &&
					window.navigator["standalone"]
				) {
					alert("O aplicativo já está instalado.")
				} else {
					alert(
						"Toque no botão de compartilhamento e selecione 'Adicionar à Tela Inicial' para instalar o aplicativo."
					)
				}
			} else {
				deferredPrompt.prompt()
				const { outcome } = await deferredPrompt.userChoice.then(
					(choiceResult: InstallPromptResult) => {
						if (choiceResult.outcome === "accepted") {
							console.log("PWA configurado com sucesso")
						} else {
							console.log("Configuração do PWA rejeitada")
						}
						setDeferredPrompt(null)
					}
				)
			}
		}
	}

	const addToHomeScreen = () => {
		alert(
			"Para adicionar este aplicativo à tela inicial é necessário acessar o site pelo navegador Safari, depois toque no ícone de compartilhamento ⏏️ e selecione 'Adicionar à Tela de Início ⊕'."
		)
	}

	if (!siteConfig || !manifest) {
		return <div>Carregando...</div>
	}

	return (
		<div className={`${styles.container} ${styles.cardContainer}`}>
			<div className={styles.cardInfo}>
				<p>
					<strong>Site:</strong>{" "}
					{siteConfig.data.sections.stores[0].name}
				</p>
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
				<br></br>
				<br></br>
				<br></br>

				{setupButtonVisible &&
					!navigator.userAgent.includes("iPhone") && (
						<button onClick={installApp}>Baixar o App</button>
					)}
				{/* Botão de instrução para iOS */}
				{navigator.userAgent.includes("iPhone") && (
					<button onClick={addToHomeScreen}>
						Como Baixar o App (iOS)
					</button>
				)}
			</div>
			{/* <p>
				<strong>JSON:</strong>{" "}
				<pre>{JSON.stringify(siteConfig.data, null, 2)}</pre>
			</p> */}
		</div>
	)
}
