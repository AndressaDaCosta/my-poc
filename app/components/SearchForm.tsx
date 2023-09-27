"use client"

import { ChangeEvent, useState, useEffect } from "react"
import styles from "../styles/home.module.css"
import Link from "next/link"

export default function SearchForm() {
	const [siteId, setSiteId] = useState("")
	const [currentHost, setCurrentHost] = useState("")

	useEffect(() => {
		if (typeof window !== "undefined") {
			setCurrentHost(window.location.hostname)
		}
	}, [])

	const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
		setSiteId(event.target.value)
	}

	const siteUrl = `/site?siteId=${siteId}`

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
			<Link href={siteUrl}>
				<button className={styles.button}>Buscar</button>
			</Link>
		</div>
	)
}
