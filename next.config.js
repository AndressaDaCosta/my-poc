const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    // No modo de desenvolvimento, não registre o Service Worker
    return nextConfig;
  }

  if (phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = require("@ducanh2912/next-pwa").default({
      dest: "public",
    });

    // Configuração das regras de reescrita
    const rewrites = async () => {
      return [
        {
          source: "/manifest.json",
          destination: "/app/api/manifest.ts",
        },
      ];
    };

    return withPWA({
      ...nextConfig,
      async rewrites() {
        return rewrites();
      },
    });
  }
  return nextConfig;
};
