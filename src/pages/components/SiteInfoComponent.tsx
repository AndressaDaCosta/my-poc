import React from "react";


interface SiteInfoComponentProps {
  siteData: SiteData | null;
}

const SiteInfoComponent: React.FC<SiteInfoComponentProps> = ({ siteData }) => {
  if (!siteData) {
    return null; // Você pode exibir uma mensagem de erro aqui se necessário
  }

  return (
    <div>
      <p>
        <strong>Domínio:</strong> {siteData.domain}
      </p>
      <p>
        <strong>Tipo de Site:</strong> {siteData.storeType}
      </p>
      <p>
        <strong>Id Layout:</strong> {siteData.theme?.id}
      </p>
      <p>
        <strong>Título:</strong> {siteData.sections.configurations.title}
      </p>
      <p>
        <strong>Favicon:</strong>{" "}
        <img
          src={siteData.sections.configurations.favicon}
          alt="Favicon"
          width={40}
        />
      </p>
      <p>
        <strong>Descrição:</strong>{" "}
        {siteData.sections.configurations.description}
      </p>
    </div>
  );
};

export default SiteInfoComponent;
