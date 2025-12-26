# 🚀 Portfólio Interativo - Luiz Weber

Portfólio pessoal desenvolvido com React e Three.js, apresentando uma experiência visual moderna com background 3D interativo, sistema de blog integrado e navegação intuitiva.

## Características

- **Background 3D Interativo**: Simulação de partículas espaciais com Three.js que responde ao movimento do mouse e scroll
- **Blog Integrado**: Sistema completo de artigos com Markdown, tags, filtros e compartilhamento social
- **Tema Cosmic Explorer**: Paleta de cores espacial com efeitos de neon e glassmorphism
- **Responsivo**: Design mobile-first com breakpoint em 768px
- **Hash Routing**: Navegação SPA sem React Router, URLs compartilháveis para cada seção
- **CSS Modules**: Estilos encapsulados sem conflitos

## Stack Técnica

### Core
- **React 18** - Framework principal
- **Vite** - Build tool e dev server com HMR ultrarrápido
- **JavaScript (ES6+)** - Linguagem base

### Bibliotecas
- **Three.js** - Renderização 3D do background espacial
- **react-markdown** - Renderização de artigos em Markdown
- **react-icons** - Ícones do Feather Icons

### Estilização
- **CSS Modules** - Estilos encapsulados por componente
- **Cosmic Explorer Theme** - Tema customizado com variáveis CSS
- **Glassmorphism** - Efeitos de vidro com backdrop-filter

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **VS Code + GitHub Copilot** - Ambiente de desenvolvimento
- **Claude Sonnet 4.5** - Assistente de IA para desenvolvimento

## 📁 Estrutura do Projeto

```
site-portifolio-v2/
├── src/
│   ├── components/          # Componentes React
│   │   ├── AboutSection.jsx
│   │   ├── ArticleModal.jsx
│   │   ├── BlogCard.jsx
│   │   ├── BlogSection.jsx
│   │   ├── PortfolioCard.jsx
│   │   ├── PortfolioSection.jsx
│   │   ├── ShareButton.jsx
│   │   ├── SpaceBackground.jsx
│   │   └── TopNav.jsx
│   ├── data/                # Dados estáticos
│   │   ├── articles.js      # Artigos do blog
│   │   └── source.js        # Projetos e skills
│   ├── hooks/               # Custom hooks
│   ├── css/                 # Arquivos CSS globais
│   │   └── space-theme.css  # Tema Cosmic Explorer
│   ├── App.jsx              # Componente principal
│   ├── App.module.css       # Estilos do App
│   ├── index.css            # Estilos globais
│   └── main.jsx             # Entry point
├── public/                  # Assets estáticos
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Como Executar

### Pré-requisitos
- Node.js 16+ 
- npm ou yarn

### Instalação

1. Clone o repositório
```bash
git clone https://github.com/luizwbr/site-portifolio-v2.git
cd site-portifolio-v2
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

4. Acesse no navegador
```
http://localhost:5173
```

## Build para Produção

```bash
npm run build
```

Os arquivos otimizados serão gerados na pasta `dist/`.

Para testar o build localmente:
```bash
npm run preview
```

## Componentização

### Principais Componentes

- **TopNav** - Menu de navegação fixo no topo
- **SpaceBackground** - Background 3D com Three.js
- **BlogSection** - Lista de artigos com filtros por tags
- **BlogCard** - Card de preview de artigo
- **ArticleModal** - Visualizador completo de artigo
- **ShareButton** - Botões de compartilhamento social
- **PortfolioSection** - Seção de projetos
- **PortfolioCard** - Card de projeto
- **AboutSection** - Página sobre (Skills + Bio)

## Navegação

O site usa hash routing para navegação SPA:

- `/` ou `#` - Home
- `#sobre` - Sobre (Skills + Trajetória)
- `#projetos` - Projetos
- `#blog` - Blog
- `#artigo/slug-do-artigo` - Artigo específico
- `#tag/nome-da-tag` - Filtro por tag

## Funcionalidades

### Blog
- Renderização de Markdown
- Sistema de tags com filtros
- URLs compartilháveis
- Compartilhamento em redes sociais (Twitter, LinkedIn, Facebook)
- Cálculo de tempo de leitura

### Background 3D
- Partículas animadas
- Rotação da câmera com movimento do mouse
- Zoom com scroll
- Desabilitado em dispositivos móveis para performance

### Responsividade
- Mobile-first design
- Grid adaptativo (3 colunas → 1 coluna)
- Menu responsivo (completo → apenas ícones)
- Breakpoint principal: 768px

## 🎨 Tema Cosmic Explorer

Paleta de cores espacial com variáveis CSS:

```css
--cosmic-deep-space: #0B0E1A
--cosmic-neon-cyan: #00D9FF
--cosmic-stellar-blue: #0084FF
--cosmic-starlight: #E0E7FF
--cosmic-stardust: #B8C5E0
```

Efeitos:
- Gradientes cyan-to-blue em títulos
- Glassmorphism em cards
- Glow effects nos botões
- Micro-animações em hover

## 📝 Licença

Este projeto está sob a licença MIT.

## ✉️ Contato

- **Email**: luiz.weber@pm.me
- **GitHub**: [github.com/luizwbr](https://github.com/luizwbr)
- **LinkedIn**: [linkedin.com/in/luizwbr](https://linkedin.com/in/luizwbr)
- **Website**: [weber.eti.br](https://www.weber.eti.br)

## Desenvolvimento com IA

Este projeto foi desenvolvido utilizando ferramentas de IA como acelerador de produtividade:

- **GitHub Copilot** - Sugestões de código e autocompletar
- **Claude Sonnet 4.5** - Pair programming, arquitetura e debugging

A IA foi usada para acelerar implementações, não para substituir conhecimento técnico.

---

⭐ Se gostou do projeto, deixe uma estrela no repositório!