# Manu Valera — Psicologia Infantil

Landing page profissional desenvolvida para **Manu Valera**, psicóloga infantil em Uberlândia — MG, registrada no **CRP 04/76358**.

O projeto apresenta o trabalho da profissional de maneira acolhedora, humanizada e acessível, combinando leveza infantil com a credibilidade de um atendimento psicológico especializado.

## Objetivo da página

A landing page foi criada para:

- apresentar a Manu e sua formação profissional;
- comunicar seus serviços de forma clara e responsável;
- transmitir acolhimento às crianças, adolescentes e suas famílias;
- destacar o atendimento relacionado ao desenvolvimento infantil, ABA, autismo e neurodiversidade;
- orientar pais e cuidadores sobre o funcionamento do acompanhamento;
- facilitar o contato e o agendamento de uma conversa pelo WhatsApp.

O público principal são pais, mães e responsáveis por crianças e adolescentes de 2 a 16 anos, em Uberlândia e região, que procuram acompanhamento psicológico infantil, orientação parental ou suporte especializado.

## Serviços apresentados

- Psicologia infantil;
- intervenção baseada em Análise do Comportamento Aplicada — ABA;
- acompanhamento em autismo e neurodiversidade;
- orientação para pais e cuidadores;
- atendimentos presenciais e on-line, definidos conforme a possibilidade e em conversa com a família.

## Experiência e identidade visual

A interface utiliza a identidade da Manu, com rosa, verde-menta, off-white e detalhes em tons pastel. Fotografias reais e formas orgânicas reforçam proximidade, confiança e acolhimento.

Entre os recursos da página estão:

- layout responsivo para computadores, tablets e celulares;
- navegação semântica e acessível;
- botão flutuante e chamadas para contato pelo WhatsApp;
- mensagem de contato preenchida automaticamente;
- apresentação profissional, serviços, processo de atendimento e perguntas frequentes;
- animações de entrada durante a rolagem;
- cartões com perspectiva e profundidade;
- seção interativa com brinquedos que se organizam conforme a rolagem;
- suporte à preferência do sistema por movimento reduzido.

## Tecnologias utilizadas

- **HTML5:** estrutura semântica, conteúdo e acessibilidade;
- **CSS3:** identidade visual, responsividade, ilustrações, transições e efeitos 3D;
- **JavaScript:** menu, animações, observação da rolagem e interações com o cursor;
- **Git e GitHub:** versionamento e hospedagem do código-fonte;
- **Vercel:** publicação e futuras atualizações automáticas a partir da branch `main`;
- **OpenAI Sites:** prototipação e primeira publicação do projeto.

O projeto não utiliza framework ou biblioteca de animação. Os efeitos foram construídos com CSS e JavaScript puro para manter a página leve e tornar o código mais fácil de estudar.

## Estrutura do projeto

```text
Portfólio Manu/
├── dist/
│   ├── assets/              # Logo e fotografias
│   ├── index.html           # Estrutura e conteúdo da página
│   ├── script.js            # Interações e animações
│   └── styles.css           # Estilos, responsividade e elementos visuais
├── .gitignore               # Arquivos ignorados pelo Git
├── README.md                # Documentação do projeto
└── vercel.json              # Configuração de publicação na Vercel
```

## Executar localmente

Por ser um site estático, você pode abrir `dist/index.html` diretamente no navegador.

Para utilizar um servidor local:

```powershell
python -m http.server 4173 --directory dist
```

Depois, acesse:

```text
http://localhost:4173
```

## Publicação na Vercel

O arquivo `vercel.json` define `dist` como a pasta pública. Na importação do repositório pela Vercel, utilize:

- **Framework Preset:** Other;
- **Build Command:** vazio;
- **Output Directory:** `dist`.

Após a integração com o GitHub, novos commits enviados para a branch `main` podem gerar atualizações automáticas da página.

## Site publicado

[Acessar a landing page da Manu Valera](https://manu-valera-psicologia.barcelona-fla.chatgpt.site/)

## Aprendizados do projeto

Este projeto também foi desenvolvido como exercício prático de programação, abordando:

- HTML semântico;
- variáveis e organização de CSS;
- Flexbox e CSS Grid;
- responsividade com media queries;
- manipulação do DOM;
- `IntersectionObserver`;
- animações ligadas à rolagem;
- perspectiva com `transform`, `rotateX` e `rotateY`;
- acessibilidade e `prefers-reduced-motion`;
- fluxo de trabalho com Git, GitHub e deploy contínuo.

---

Desenvolvido para **Manu Valera — Psicologia Infantil**.
