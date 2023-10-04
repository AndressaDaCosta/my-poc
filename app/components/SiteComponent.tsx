"use client"

import { useEffect, useState } from "react"
import type { MetadataRoute } from "next/types"
import manifest from "../manifest"
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

const getManifest = async () => {
	try {
		const data = await manifest()
		return data
	} catch (error) {
		console.error(error)
		return null
	}
}

export default function SiteComponent() {
	const [manifestData, setManifestData] =
		useState<MetadataRoute.Manifest | null>(null)
	const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null)
	const [setupButtonVisible, setSetupButtonVisible] = useState(false)
	const [deferredPrompt, setDeferredPrompt] = useState<any>(null)
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		window.addEventListener("beforeinstallprompt", (e) => {
			e.preventDefault()
			setDeferredPrompt(e)
			setSetupButtonVisible(true); 
		})
	}, [])
	useEffect(() => {
		fetch("https://api-site-config.convem.me/V1/config-json/539")
			.then((response) => {
				if (!response.ok) {
					throw new Error("Erro na solicitação à API")
				}
				return response.json()
			})
			.then((data: SiteConfig) => {
				setSiteConfig(data)
				setSetupButtonVisible(true)
				return manifest()
			})
			.then((manifestData) => {
				setManifestData(manifestData)
			})
			.catch((error) => {
				console.error(error)
				setSiteConfig(null)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])

	const isIOSDevice = () => {
		const userAgent = window.navigator.userAgent.toLowerCase()
		return /iphone|ipad|ipod/.test(userAgent)
	}

	const isAppInstalled = () => {
		return (
			"standalone" in window.navigator && window.navigator["standalone"]
		)
	}

	const installApp = async () => {
		if (deferredPrompt) {
			if (isIOSDevice() && isAppInstalled()) {
				alert("O aplicativo já está instalado.")
				console.log("O aplicativo já está instalado.")
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
						setSetupButtonVisible(false); 
					}
				)
			}
		}
	}

	const promptAddToHomeScreen = () => {
		alert(
			'Para adicionar este aplicativo à tela inicial é necessário acessar o site pelo navegador Safari, depois toque no ícone de compartilhamento ⏏️ e selecione "Adicionar à Tela de Início ⊕".'
		)
	}

	if (loading) {
		return <div>Carregando...</div>
	}
	return (
		<div className={`${styles.container} ${styles.cardContainer}`}>
			<div className={styles.cardInfo}>
				{siteConfig && (
					<>
						<p>
							<strong>Site:</strong>{" "}
							{siteConfig.data.sections.stores[0].name}
						</p>
						<p>
							<strong>Domínio:</strong> {siteConfig.data.domain}
						</p>
						<p>
							<strong>Tipo de Site:</strong>{" "}
							{siteConfig.data.storeType}
						</p>
						<p>
							<strong>Id Layout:</strong>{" "}
							{siteConfig.data.theme?.id}
						</p>
						<p>
							<strong>Titulo:</strong>{" "}
							{siteConfig.data.sections.configurations?.title}
						</p>
						<p>
							<strong>Favicon: </strong>
							<img
								src={
									siteConfig.data.sections.configurations
										?.favicon
								}
								alt="Favicon"
								width={40}
							/>
						</p>
						<p>
							<strong> Descrição: </strong>
							{
								siteConfig.data.sections.configurations
									?.description
							}
						</p>

						{setupButtonVisible &&
							!isIOSDevice() &&
							!isAppInstalled() && (
								<button onClick={installApp}>
									Baixar o App
								</button>
							)}
						{isIOSDevice() && !isAppInstalled() && (
							<button onClick={promptAddToHomeScreen}>
								Como Baixar o App (iOS)
							</button>
						)}
					</>
				)}
			</div>
		</div>
	)
}
