"use client";

import { ChangeEvent, useState } from "react";
import styles from "../styles/home.module.css";
import Link from "next/link";
import SiteComponente from "../components/SiteComponent"; 

export default function SearchForm() {
  const [domain, setDomain] = useState("");
  const [showSite, setShowSite] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setDomain(event.target.value);
  };
  const handleShowSite = () => {
    setShowSite(true); 
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
        value={domain}
        onChange={handleInputChange}
      />
     <button className={styles.button} onClick={handleShowSite}>
        Buscar
      </button>

      {showSite && <SiteComponente domain={domain}  />} 
    </div>
    
  );
}
