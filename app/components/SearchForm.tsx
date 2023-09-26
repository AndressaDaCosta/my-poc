"use client";

import { useState } from "react";
import styles from "../styles/home.module.css";
import Link from "next/link";

export default function ApiDataSearch() {
  const [siteId, setSiteId] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSiteId(event.target.value);
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src="/convem-logo.svg" alt="Logo" />
      </div>
      <h3>Informe o ID do Site</h3>
      <input
        className={styles.input}
        type="text"
        placeholder="Exemplo: 1243"
        value={siteId}
        onChange={handleInputChange}
      />
      <Link
        href={{
          pathname: "/site",
          query: { siteId: siteId },
        }}
      >
        <button className={styles.button}>Buscar</button>
      </Link>
    </div>
  );
}
