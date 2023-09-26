import { useState } from "react"
import { useRouter } from "next/router"
import styles from "./ApiDataSearch.module.css"

export default function ApiDataSearch() {
	const router = useRouter()
	const [siteId, setSiteId] = useState("")
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState<string | Error>("")

	const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setSiteId(event.target.value)
		setError("")
	}

	const handleSubmit = async () => {
		if (!siteId) {
			setError("Informe o ID.")
			return
		}
		if (isNaN(Number(siteId))) {
			setError("Somente Números.")
			return
		}

		
		setLoading(true)
		setError("")

		try {
			const response = await fetch(
				`https://api-site-config.convem.me/V1/config-json/${siteId}`
			)
			if (response.status === 404) {
				throw new Error("ID não encontrado na API.")
			}
			router.push(`/${siteId}`)
		} catch (err) {
			setError(
				err instanceof Error ? err.message : "Erro na busca de dados."
			)
		} finally {
			setLoading(false)
		}
	}

	return (
		
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
				onClick={handleSubmit}
				disabled={loading}>
				{loading ? "Carregando..." : "Buscar Dados"}
			</button>
			{error && (
				<p className={styles.error}>
					{typeof error === "string" ? error : error.message}
				</p>
			)}
		</div>
	)
}