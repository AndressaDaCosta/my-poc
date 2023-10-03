import { NextApiRequest, NextApiResponse } from "next"

type ManifestContent = {
	name: string
	short_name: string
	start_url: string
	display: string
	background_color: string
	theme_color: string
	icons: {
		src: string
		sizes: string
		type: string
		purpose: string
	}[]
}

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<ManifestContent | { error: string }>
) {
	try {
		const response = await fetch(
			"https://api-site-config.convem.me/V1/config-json/539"
		)

		if (!response.ok) {
			res.status(500).json({
				error: "Erro ao obter as informações da API"
			})
			return;
		}

		const data = await response.json()

		const manifestContent: ManifestContent = {
			name: data.data.sections.configurations?.title,
			short_name: data.data.sections.stores[0].name,
			start_url: "/",
			display: "standalone",
			background_color: data.data.sections.banners[0].button_bg_color,
			theme_color: data.data.sections.banners[0].button_text_color,
			icons: [
				{
					src: data.data.sections.configurations?.favicon,
					sizes: "192x192",
					type: "image/png",
					purpose: "any maskable"
				}
			]
		}

		res.setHeader("Content-Type", "application/json")
		res.status(200).json(manifestContent)
	} catch (error) {
		console.error(error)
		res.status(500).json({ error: "Erro ao gerar o manifest.json" })
	}
}
