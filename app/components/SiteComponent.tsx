"use client";

import { useEffect, useState } from "react";
import styles from "../styles/site.module.css";

type SiteConfig = {
  data: {
    domain: string;
    theme: {
      id: number;
    };
    storeType: string;
    sections: {
      configurations: {
        title: string;
        favicon: string;
        description: string;
      };
    };
  };
};

export default function SiteComponent() {
  const [siteConfig, setSiteConfig] = useState<SiteConfig | null>(null);

  useEffect(() => {
    fetch(`https://api-site-config.convem.me/V1/config-json/1243`)
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
  }, []);

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
  );
}
