# Proof of Concept (PoC) - Indexação

Esta é uma prova de conceito simples que demonstra como criar várias páginas no Next.js e gerenciar metadados (como título, descrição e ícone) para cada página.
E também gerenciar os dados compartilhados através de whatsapp com open graph.

## Estrutura de Pastas

-   `pages/`: Contém as páginas da aplicação, incluindo a página inicial e as páginas de layout.
-   `public/`: Armazena arquivos estáticos, como ícones.
-   `components/`: Contém os componentes reutilizáveis, como o layout.
-   `metadata.json`: Um arquivo JSON que armazena os metadados para cada layout.

## Como Rodar

1. Certifique-se de ter o Node.js instalado em seu sistema.
2. Clone este repositório para sua máquina local usando `git clone`.
3. Navegue até o diretório do projeto usando `cd`.
4. Instale as dependências com `npm install`.
5. Inicie o servidor de desenvolvimento com `npm run dev`.
6. Abra seu navegador e acesse `http://localhost:3000` para ver a PoC em funcionamento.

## Metadados e Layouts

-   A PoC inclui várias páginas de layout (layout1, layout2, layout3, layout4).
-   Cada página de layout possui seu próprio título, descrição e ícone definidos no arquivo `metadata.json`.
-   O ícone de cada página deve ser armazenado na pasta `public/`.

## Tecnologias Usadas

-   Next.js
-   React
-   HTML/CSS

#

Andressa da Costa
