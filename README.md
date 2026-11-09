# Landing page — Manu Valera

Landing page estática para a psicóloga infantil Manu Valera. O projeto foi feito com HTML, CSS e JavaScript sem framework para tornar os fundamentos fáceis de estudar.

## Estrutura

- `dist/index.html`: conteúdo e estrutura semântica da página.
- `dist/styles.css`: identidade visual, responsividade e animações.
- `dist/script.js`: menu, entrada dos elementos e efeito de profundidade.
- `dist/assets/`: logo e fotografias.
- `.openai/hosting.json`: configuração de publicação do Site.

## Conceitos para estudar

1. **HTML semântico:** observe o uso de `header`, `nav`, `main`, `section`, `article`, `details` e `footer`.
2. **Design tokens:** as variáveis no início do CSS concentram cores, medidas e sombras.
3. **Layout responsivo:** Grid organiza as seções e as media queries adaptam o conteúdo a telas menores.
4. **Progressive enhancement:** o conteúdo funciona sem JavaScript; o script apenas melhora a experiência.
5. **Acessibilidade:** há link de salto, textos alternativos, estados ARIA e suporte a movimento reduzido.
6. **Efeito 3D leve:** `perspective`, `rotateX` e `rotateY` criam profundidade sem biblioteca externa.
7. **Animação ligada à rolagem:** a seção de brinquedos calcula o progresso da rolagem, interpola posições com JavaScript e mantém os elementos visuais em CSS.

## Testar localmente

Abra `dist/index.html` no navegador ou sirva a pasta `dist` com um servidor estático de sua preferência.

## Primeiro exercício

No arquivo `styles.css`, altere os valores de `--pink` e `--mint` dentro de `:root`. Depois acompanhe como essas duas variáveis atualizam toda a interface.
