# Guia de Marmitas para Quem Trabalha Fora

Landing page responsiva e profissional para vender um produto digital de baixo ticket.

## Estrutura do projeto

- `index.html` — estrutura da landing page
- `styles.css` — estilos visuais e responsividade
- `script.js` — checkout, FAQ e configurações gerais
- `assets/icons/favicon.svg` — favicon configurável
- `assets/mockups/product-mockup.svg` — mockup do produto
- `termos.html`, `privacidade.html`, `contato.html` — páginas placeholder

## Como abrir localmente

Você pode abrir o arquivo `index.html` diretamente no navegador. Para uma experiência mais fiel, também pode servir a pasta localmente com:

```bash
python -m http.server 8000
```

Depois acesse:

```text
http://localhost:8000
```

## Como editar as informações principais

### 1) Nome do produto
Abra `index.html` e procure as ocorrências do texto:

```html
Guia de Marmitas para Quem Trabalha Fora
```

Troque pelo nome desejado.

### 2) Preço
No arquivo `index.html`, altere o texto:

```html
R$ 19,90
```

Se quiser alterar o valor, edite também o Schema.org em `index.html`:

```html
"price": "19.90"
```

### 3) URL da Cakto
No arquivo `script.js`, substitua a constante:

```js
const CHECKOUT_URL = "https://pay.cakto.com.br/fw7zueg_1122516";
```

> Essa variável é usada por todos os botões de compra da landing page.

### 4) Imagens e mockups
Se quiser trocar o favicon ou a imagem de produto, substitua os arquivos em:

- `assets/icons/favicon.svg`
- `assets/mockups/product-mockup.svg`

Ou remova os arquivos e use outro visual de sua preferência.

### 5) Textos do site
Todos os textos principais ficam em `index.html`.

Edite os textos diretamente nos blocos de conteúdo, como:

- slogan e headline
- seções de problema e solução
- descrição do produto
- FAQ
- rodapé

### 6) Links de política e contato
Os links do rodapé apontam para arquivos placeholders:

- `termos.html`
- `privacidade.html`
- `contato.html`

Edite esses arquivos para inserir o texto real da sua política e informações de contato.

### 7) Informações de contato
Abra `contato.html` e edite os dados de contato conforme sua preferência.

### 8) Pixels e analytics
No `head` do `index.html` e no arquivo `script.js`, há comentários indicando onde inserir:

- Google Analytics
- Meta Pixel
- Google Tag Manager

### 9) Favicon
Edite `assets/icons/favicon.svg` para criar um ícone compatível com o seu branding.

## Observações importantes

- Não foi criada nenhuma integração própria de pagamento.
- A página está preparada para receber a URL do checkout depois.
- Todos os botões de compra foram pensados para chamar a mesma variável `CHECKOUT_URL`.
- O produto é apresentado de forma responsável, sem promessas de emagrecimento, números falsos de compradores ou avaliações inventadas.

## Licença

Este projeto foi criado como exemplo de landing page para uso pessoal ou comercial, com marcação e edição livres conforme necessidade do vendedor.
