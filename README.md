# PoC de Teste para Resolver Problemas de Indexação e Compartilhamento no WhatsApp

Prova de conceito (PoC) que aborda a resolução de problemas de indexação e compartilhamento no WhatsApp usando Next.js. Configurando metadados e criando páginas dinâmicas para compartilhamento em redes sociais.

### Configuração de Metadados

-   A página do site (app/site/page.tsx) usa metadados para controlar como as informações são exibidas quando compartilhadas em redes sociais. O objeto metadata é usado para definir o título e a descrição da página, bem como ícones e imagens para compartilhamento.

### Formulário de Pesquisa

-   A página inicial (app/page.tsx) inclui um formulário de pesquisa onde o usuário pode inserir o ID de um site registrado na API. Quando clicar em "Buscar", é redirecionado para a página de destino correspondente ao site, onde as informações do site são exibidas.

### Página de Destino do Site

-   A página de destino do site (app/site/page.tsx) recebe o ID do site como parâmetro de consulta. Ele faz uma chamada à API para buscar informações do site com base no ID e exibe essas informações na página. Além disso, configura os metadados com base nas informações do site para garantir um compartilhamento apropriado em redes sociais.

<img src="./assets/SEO.png">

<div align="center">

### Exemplos de compartilhamento por whatsapp:

<img src="./assets/cassino.png">

#

<img src="./assets/mercado.png">

#



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

</div>
