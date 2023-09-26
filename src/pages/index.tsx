// pages/index.tsx

import styles from "../styles/Home.module.css"
import React, { useState } from "react"
import { useRouter } from "next/router"

const Home = () => {
	const router = useRouter()
	const [siteId, setSiteId] = useState("")

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSiteId(event.target.value)
	}

	const handleSubmit = async () => {
		if (!siteId) {
			return
		}

		try {
			const response = await fetch(
				`https://api-site-config.convem.me/V1/config-json/${siteId}`
			)
			if (response.status === 404) {
				throw new Error("ID não encontrado na API.")
			}
			const data = await response.json()

			if (data.data && data.data.theme) {
				const themeId = data.data.theme.id

				switch (themeId) {
					case 1:
						router.push(`/layout1?siteId=${siteId}`)
						break
					case 2:
						router.push(`/layout2?siteId=${siteId}`)
						break
					case 3:
						router.push(`/layout3?siteId=${siteId}`)
						break
					case 4:
						router.push(`/layout4?siteId=${siteId}`)
						break
					default:
						throw new Error("Layout não suportado")
				}
			} else {
				throw new Error("Dados inválidos da API.")
			}
		} catch (err) {
			console.error(err)
		}
	}

	return (
		<div>
			<div className={styles.cardContainer}>
				<div className={styles.logoContainer}>
					<img
						className={styles.logo}
						src="/convem-logo.svg"
						alt="Logo"
					/>
				</div>
				<h3>Informe o ID do Site</h3>
				<input
					className={styles.input}
					type="text"
					placeholder="Exemplo: 1243"
					value={siteId}
					onChange={handleInputChange}
				/>
				<button
					className={styles.button}
					onClick={handleSubmit}>
					Buscar Dados
				</button>
			</div>
		</div>
	)
}

export default Home
