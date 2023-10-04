# PoC de Teste para Resolver Problemas de Indexação e Compartilhamento no WhatsApp

✅ - Indexação Correta

✅ - Compartilhamento Correto

✅ - Botão automático Baixar App

⏳ - Problemas de cache ao atualizar versão

❌ - Websocket

#

Prova de conceito (PoC) que aborda a resolução de problemas de indexação e compartilhamento no WhatsApp usando Next.js. Configurando metadados e criando páginas dinâmicas para compartilhamento em redes sociais.

### Configuração de Metadados

-   A página do site (app/site/page.tsx) usa metadados para controlar como as informações são exibidas quando compartilhadas em redes sociais. O objeto metadata é usado para definir o título e a descrição da página, bem como ícones e imagens para compartilhamento.

### Formulário de Pesquisa

-   A página inicial (app/page.tsx) inclui um formulário de pesquisa onde o usuário pode inserir o ID de um site registrado na API. Quando clicar em "Buscar", é redirecionado para a página de destino correspondente ao site, onde as informações do site são exibidas.

### Página de Destino do Site

-   A página de destino do site (app/site/page.tsx) recebe o ID do site como parâmetro de consulta. Ele faz uma chamada à API para buscar informações do site com base no ID e exibe essas informações na página. Além disso, configura os metadados com base nas informações do site para garantir um compartilhamento apropriado em redes sociais.
    <br>
    <br>
    <br>
    <br>
    <br>

<div align="center">

### Lighthouse

<img src="./assets/SEO.png">

### Exemplos de compartilhamento por whatsapp:

<img width="235" height="252" src="./assets/cassino-whats.png">
<img width="235" height="252" src="./assets/crismar-whats.png">

#

<img src="./assets/mercado.png">

#

## Baixar App automático (atalho na tela inicial do dispositivo)

<span>Desktop botões de instalação do App</span>

<img width="400" height="300"  src="./assets/desktop-baixar-app.png">

#

<span>Desktop Botão Oculto após instalação</span>

<img width="400" height="300"  src="./assets/hide-button.png">

#

<div style="display: flex; flex-wrap: wrap; align-items: center;">
  <div style="text-align: center; margin: 10px;">
    <span>Botão Mobile</span>
    <br>
    <img width="150" height="300" src="./assets/mobile-button.jpeg" alt="Botão Mobile">
  </div>
  <div style="text-align: center; margin: 10px;">
    <span>Botão Instalar Mobile</span>
    <br>
    <img width="150" height="300" src="./assets/mobile-install-app.jpeg" alt="Botão Instalar Mobile">
  </div>
  <div style="text-align: center; margin: 10px;">
    <span>Botão Oculto Mobile</span>
    <br>
    <img width="150" height="300" src="./assets/mobile-hide-button.jpeg" alt="Botão Oculto Mobile">
  </div>

</div>
<div style="display: flex; flex-wrap: wrap; align-items: center;">
  <div style="text-align: center; margin: 10px;">
    <span>Botão no Iphone (IOS)</span>
    <br>
    <img width="150" height="280" src="./assets/iphone-button.jpeg" alt="Botão no Iphone (IOS)">
  </div>
  <div style="text-align: center; margin: 10px;">
    <span>PopUp Iphone (IOS)</span>
    <br>
    <img width="150" height="280" src="./assets/iphone-popup.jpeg" alt="PopUp Iphone (IOS)">
  </div>
  </div>

#

<div style="display: flex; justify-content: space-between;">
  <div style="margin-right: 10px;">
    <span style="display: block; margin-bottom: 5px;">Mobile Vídeo</span>
    <video width="320" height="240" controls>
      <source src="/assets/mobile-video-app.mp4" type="video/mp4">
    </video>
  </div>
  <div>
    <span style="display: block; margin-bottom: 5px;">Desktop Vídeo</span>
    <video width="320" height="240" controls>
      <source src="/assets/desktop-app-video.mov" type="video/mov">
    </video>
  </div>
</div>

</div>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

<img src="./assets/siteClientes.png">

#

<img src="./assets/id=1243.png">

#

<img src="./assets/id=1248.png">

#

<img src="./assets/id=539.png">

#

<img src="./assets/id=800.png">

#
