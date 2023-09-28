"use client"
import { useEffect, useState } from "react"
import styles from "../styles/site.module.css"
import type { Metadata } from "next"

interface SiteConfig {
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

export async function generateMetadata({domain}: {domain: string}): Promise<Metadata> {
	return fetch(
		`https://api-site-config.convem.me/V1/config-json/${domain}`
	  )
		.then((res) => {
		  if (!res.ok) {
			throw new Error("ERRO");
		  }
		  return res.json();
		})
		.then((siteMetadata: SiteConfig) => {
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
		}
      };
    });
}


export default function SiteComponent({domain}: {domain: string}) {
	const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);


  useEffect(() => {
    fetch(`https://api-site-config.convem.me/V1/config-json/${domain}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("ERRO");
        }
        return response.json();
      })
      .then((data: SiteConfig) => {
        setSiteConfig(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [domain]);



  if (!siteConfig) {
    return <div>Carregando...</div>;
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
			</div>
		</div>
	)
}
