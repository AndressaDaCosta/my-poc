import { headers } from "next/headers"
import type { Metadata } from "next"
import SiteComponent from "./components/SiteComponent"

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

export async function generateMetadata(): Promise<Metadata> {
	const headersList = headers()
	const domain = headersList.get("host") || ""

	console.log("DOMÍNIO:", domain)
	const res = await fetch(
		`https://api-site-config.convem.me/V1/config-json/539`
	)
	if (!res.ok) {
		throw new Error("ERRO")
	}
	const siteMetadata: SiteConfig = await res.json()

	return {
		title: siteMetadata.data.sections.configurations?.title,
		description: siteMetadata.data.sections.configurations?.description,
		icons: {
			icon: siteMetadata.data.sections.configurations?.favicon
		},
		openGraph: {
			title: siteMetadata.data.sections.configurations?.title,
			description: siteMetadata.data.sections.configurations?.description,
			url: siteMetadata.data.domain,
			images: [
				{
					url: siteMetadata.data.sections.configurations?.favicon,
					width: 800,
					height: 600
				}
			],
			locale: "pt_BR",
			type: "website"
		},
		manifest: "/manifest.webmanifest",
		appleWebApp: {
			capable: true,
			statusBarStyle: "default"
		},
		formatDetection: {
			telephone: false
		}
	}
}

export default function Home() {
	return <SiteComponent />
}
