import type { Metadata } from "next";
import { headers } from "next/headers";
import SiteComponent from "./components/SiteComponent";

const headersList = headers();
const domain = headersList.get("host") || "";

console.log("DOMÍNIO:", domain);

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

export async function generateMetadata(): Promise<Metadata> {
  const res = await fetch(
    `https://api-site-config.convem.me/V1/config-json/1243`,
  );
  if (!res.ok) {
    throw new Error("ERRO");
  }
  const siteMetadata: SiteConfig = await res.json();

  return {
    title: siteMetadata.data.sections.configurations?.title,
    description: siteMetadata.data.sections.configurations?.description,
    icons: {
      icon: siteMetadata.data.sections.configurations?.favicon,
    },
    openGraph: {
      title: siteMetadata.data.sections.configurations?.title,
      description: siteMetadata.data.sections.configurations?.description,
      url: siteMetadata.data.domain,
      images: [
        {
          url: siteMetadata.data.sections.configurations?.favicon,
          width: 800,
          height: 600,
        },
      ],
      locale: "pt_BR",
      type: "website",
    },
  };
}

export default function Home() {
  return <SiteComponent />;
}
