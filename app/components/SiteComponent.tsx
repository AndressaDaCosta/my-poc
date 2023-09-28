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

export default function SiteComponent() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);

  useEffect(() => {
    fetch(`https://api-site-config.convem.me/V1/config-json/539`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro na solicitação à API");
        }
        return response.json();
      })
      .then((data: SiteConfig) => {
        setSiteConfig(data);
      })
      .catch((error) => {
        console.error(error);
        // Exiba uma mensagem de erro caso algo dê errado
        setSiteConfig(null);
      });
  }, []);

  const installApp = async () => {
    const manifestLink = document.querySelector('link[rel="manifest"]');
    if (manifestLink && "beforeinstallprompt" in window) {
      const installPromptEvent = new Event("beforeinstallprompt", {
        bubbles: true,
        cancelable: true,
      });

      manifestLink.dispatchEvent(installPromptEvent);

      try {
        await installPromptEvent.preventDefault();
        const href = manifestLink.getAttribute("href");
        if (href) {
          window.location.href = href;
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      // Exiba uma mensagem personalizada informando que a instalação não é suportada
      alert("A instalação não é suportada neste navegador.");
    }
  };


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
				<button onClick={installApp}>Instalar o App</button>
			</div>
		</div>
	)
}
