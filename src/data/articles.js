// src/data/articles.js
import { 
    articlesEN, 
    getPublishedArticlesEN, 
    getArticleByIdEN, 
    getArticleBySlugEN, 
    getArticlesByTagEN, 
    getAllTagsEN 
} from './articles.en';

// Função para gerar slug a partir do título
export const generateSlug = (title) => {
    return title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais
        .trim()
        .replace(/\s+/g, '-') // Substitui espaços por hífens
        .replace(/-+/g, '-'); // Remove hífens duplicados
};

export const articles = [
    {
        id: 'article-2',
        slug: 'tive-uma-empresa-uma-vez-compartilhando-com-voces',
        title: 'Tive uma empresa uma vez: compartilhando com vocês',
        excerpt: 'A história de como criei e fechei minha própria empresa de plugins e integrações de e-commerce, e as lições aprendidas no processo.',
        date: '2026-01-15',
        readTime: '8 min',
        tags: ['Empreendedorismo', 'E-commerce', 'Carreira', 'Lições'],
        content: `

Em 2016 eu recém tinha saído da Webgenium, a principal agência de sites e e-commerce da região de Cascavel.

Em uma época onde não havia esta facilidade que a IA tem hoje, redes sociais se resumiam a Facebook e Twitter, sites em WIX ainda estavam no começo, a demanda por sites era grande.

## O cenário do e-commerce em 2016

Falando de e-commerce, a Amazon não tinha chegado no Brasil, o Mercado Livre não tinha a reputação que tem hoje e Shopee nem sabíamos da existência.

Existiam diversas agências especializadas em criar sites e e-commerces e a empresa onde eu trabalhava era assim.

Criamos muitos sites, ferramentas, integrações com meios de pagamento (Cielo, Redecard, PagSeguro, etc), enfim, o tempo era interessante.

Na tentativa de acelerar a criação de sites, até foi criada uma ferramenta muito interessante, que unia WHMCS + Joomla + automações para subir um site básico com escolha de templates, em questão de minutos: o **SiteKit**. Inclusive o domínio [sitekit.com.br](http://sitekit.com.br) ainda pertence à empresa.

## A ideia de negócio

Mas o ponto nem é este, o que é interessante é que com essa demanda de e-commerce, eu atuava em paralelo, vendendo plugins e integrações de e-commerce (Joomla / Virtuemart e depois Wordpress) para outras empresas ou agências.

Cada plugin tinha diferentes preços, por exemplo: **R$ 289 reais por site** com um ano de suporte e atualizações inclusas.

Bom, e nisso eu achava que tinha uma startup de uma pessoa só.

Acabei decidindo investir meu tempo nisso e seguir em carreira solo, com meu MEI.

## A realidade do negócio

Fiz consultoria no SEBRAE na época, eu achava que este processo era viável, mas na prática eu trabalhava demais pro retorno que não tinha.

Para cada novo cliente, mesmo com tutoriais prontos e um processo de instalação e configuração via interface do Joomla, geralmente tinha uma porção de e-mails trocados entre mim e o cliente, para configurar um novo site.

Isso quando era configuração com a Cielo, por exemplo, tinha que manualmente preencher um formulário para ativar a loja e depois poder ativar o pagamento.

### O problema de escalabilidade

Enfim, eu achei que este processo todo era viável, mas **quanto mais vendas, mais trabalho**. Ou seja, não era viável manter o negócio.

Final das contas: as vendas de plugins diminuíram tanto que não consegui me manter e tive de fechar a empresa.

## A melhor decisão

Mas foi a **melhor decisão que tomei naquele momento**, desta forma eu pude me concentrar em algo muito importante: ser pai.

## Lições aprendidas

1. **Suporte não escala** - Um produto que exige muito suporte manual por cliente não é escalável
2. **Automação é essencial** - Se você não consegue automatizar o onboarding, repense o modelo
3. **Tempo tem valor** - Nem sempre mais vendas significa mais sucesso se isso consome todo seu tempo
4. **Prioridades mudam** - Às vezes fechar um negócio é a decisão mais inteligente
5. **Experiência vale ouro** - Aprendi muito sobre e-commerce, pagamentos e atendimento ao cliente

Hoje olho para trás e vejo que aquela experiência foi fundamental para minha carreira. Aprendi na prática o que funciona e o que não funciona em um negócio digital.

E você? Já tentou empreender? Compartilhe sua experiência nos comentários!
        `,
        published: true
    },
    {
        id: 'article-1',
        slug: 'como-construir-um-portfolio-interativo-com-react',
        title: 'Como construir um portfólio interativo com React',
        excerpt: 'A história de como transformei um simples portfólio em uma experiência interativa, com gamificação, navegação intuitiva e design moderno.',
        date: '2025-12-26',
        readTime: '15 min',
        tags: ['React', 'Frontend', 'Portfolio', 'UX'],
        content: `

Criar um portfólio é uma das primeiras tarefas de qualquer desenvolvedor. Mas transformá-lo em algo diferenciado? Isso é outra história.

Neste artigo, vou contar como este portfólio evoluiu de uma ideia simples para uma experiência interativa completa. Não é um tutorial passo a passo, é a história real de como construí algo único.

## A ideia inicial: Gamificação

A primeira versão tinha uma proposta diferente: **transformar o portfólio em um jogo**.

A ideia era simples. Ao invés de simplesmente listar projetos e habilidades, o visitante precisaria "explorar" o site. Um sistema de busca que funcionava como um motor de descoberta.

- Digite algo -> Encontre correspondências
- Encontre items -> Desbloqueie conteúdo
- Desbloqueie tudo -> Ganhe acesso ao menu

Era divertido. Mas tinha um problema: **ninguém gosta de trabalhar para ver um portfólio**.

## A evolução: UX vem primeiro

Percebi que a gamificação estava no caminho. As pessoas queriam acessar informações rapidamente. Então simplifiquei.

### Menu de navegação fixo

Adicionei um menu no topo com 4 links diretos:
- **Home**: Volta pro início
- **Projetos**: Lista de projetos em cards
- **Blog**: Artigos técnicos
- **Sobre**: Skills + Trajetória profissional

Cada seção tem sua própria URL. Você pode compartilhar \`#projetos\` ou \`#blog\` diretamente.

### Sistema de cards

Troquei a busca por cards visuais. Ficou muito melhor.

Cada projeto agora tem:
- Ícone identificador
- Título e descrição clara
- Tags de tecnologia
- Link direto pro GitHub (quando aplicável)

Um card por linha. Visual limpo. Fácil de escanear.

## Funcionalidades técnicas

### 1. Background interativo com Three.js

O fundo não é estático. É uma simulação 3D de partículas espaciais que responde ao scroll e movimentos do mouse.

\`\`\`javascript
// Rotação suave da câmera
camera.rotation.x += (mouseY - camera.rotation.x) * 0.05;
camera.rotation.y += (mouseX - camera.rotation.y) * 0.05;
\`\`\`

No mobile? Desabilitado. Performance importa.

### 2. Blog integrado

Adicionei uma seção de artigos completa:
- Markdown rendering com react-markdown
- Sistema de tags com filtros
- URLs compartilháveis por artigo
- Botões de compartilhamento social (Twitter, LinkedIn, Facebook)

Cada artigo tem seu slug: \`#article/como-construir-um-portfolio-interativo-com-react\`

### 3. Seção "Sobre" unificada

Juntei Skills e Biografia numa única página:

**Competências Técnicas** (grid de cards)
- Backend: Go, PHP, Node.js
- Frontend: React, Vue, Angular
- Banco de dados: MongoDB, PostgreSQL, MySQL

**Trajetória Profissional** (timeline)
- Linha do tempo vertical
- Cards de experiência
- Tags de tecnologias usadas

## Stack técnica

\`\`\`json
{
  "framework": "React 18",
  "build": "Vite",
  "3d": "Three.js",
  "markdown": "react-markdown",
  "icons": "react-icons"
}
\`\`\`

### Por que Vite?

Simples: é **rápido**.

Hot Module Replacement em milissegundos. Build otimizado automaticamente. Sem configuração complexa.

### Por que Three.js?

Porque não né? kkk

Three.js permite criar experiências visuais impressionantes sem muito esforço. O background espacial usa menos de 200 linhas de código.

## Componentização

Tudo é componente reutilizável:

- \`TopNav\` -> Menu de navegação
- \`BlogCard\` -> Card de artigo
- \`PortfolioCard\` -> Card de projeto
- \`AboutSection\` -> Página sobre
- \`ArticleModal\` -> Visualizador de artigo
- \`ShareButton\` -> Compartilhamento social

Cada um com seu CSS Module. Sem conflitos de estilo. Fácil de manter.

## Sistema de roteamento

Não usei React Router. Por quê?

É um SPA simples. Hash routing resolve:

\`\`\`javascript
// Estado inicial baseado na URL
const getInitialFilter = () => {
  const hash = window.location.hash;
  if (hash === '#sobre') return 'sobre';
  if (hash === '#projetos') return 'projetos';
  if (hash === '#blog') return 'blog';
  return null;
};
\`\`\`

Menos dependências = melhor performance.

## Responsividade

Mobile-first sempre.

Grid de 3 colunas no desktop -> 1 coluna no mobile. Menu completo -> apenas ícones. Background 3D -> desabilitado.

Breakpoint principal: 768px.

\`\`\`css
@media (max-width: 768px) {
  .itemsGrid {
    grid-template-columns: 1fr;
  }
}
\`\`\`

## Detalhes que fazem diferença

### Smooth scroll
\`\`\`css
html {
  scroll-behavior: smooth;
}
\`\`\`

### Glassmorphism
\`\`\`css
.card {
  background: rgba(10, 22, 40, 0.6);
  backdrop-filter: blur(10px);
}
\`\`\`

### Micro-animações
\`\`\`css
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
}
\`\`\`

## IA como acelerador de produtividade

Uma das ferramentas que mais fez diferença neste projeto foi o uso de **IA durante o desenvolvimento**.

Usei **VS Code com GitHub Copilot e Claude Sonnet 4.5** em todas as etapas do projeto.

Não foi sobre deixar a IA escrever tudo. Foi sobre **acelerar decisões e implementações**:

### Como usei IA no projeto

**Geração de componentes**: Criar a estrutura base de novos componentes React com props e tipos corretos.

**Refatoração**: Transformar código repetitivo em componentes reutilizáveis sem erros.

**CSS e estilos**: Gerar variações de glassmorphism, micro-animações e responsividade.

**Debugging**: Identificar problemas em código complexo (especialmente com Three.js).

**Arquitetura**: Sugestões de padrões, como usar hash routing ao invés de React Router.

### Exemplo real

O sistema de roteamento hash foi sugestão do Claude:

\`\`\`javascript
const getInitialFilter = () => {
  const hash = window.location.hash;
  if (hash === '#sobre') return 'sobre';
  // ...
};
\`\`\`

Implementei, testei, ajustei. Funcionou perfeitamente sem dependências extras.

### A regra de ouro

**IA não substitui conhecimento técnico. Ela amplifica o que você já sabe.**

Use como pair programming: questione, valide, aprenda. Nunca aceite código cegamente.

## O código está no GitHub

Este portfólio é open source. Sinta-se livre para opinar ou contribuir.

[github.com/luizwbr/site-portifolio-v2](https://github.com/luizwbr/site-portifolio-v2)
        `,
        published: true
    },
    {
        id: 'article-2',
        slug: 'hooks-customizados-potencializando-seu-codigo-react',
        title: 'Hooks customizados: Potencializando seu código React',
        excerpt: 'Descubra como criar hooks customizados para reutilizar lógica e manter seu código limpo e organizado.',
        date: '2025-12-15',
        readTime: '8 min',
        tags: ['React', 'Hooks', 'JavaScript'],
        content: `
# Hooks customizados: Potencializando seu código React

Hooks customizados são uma das features mais poderosas do React. Vamos explorar como criá-los.

## O que são Hooks customizados?

Hooks customizados permitem extrair lógica de componentes em funções reutilizáveis.

## Exemplo prático

\`\`\`javascript
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}
\`\`\`

## Benefícios

- Reutilização de código
- Separação de responsabilidades
- Testes mais fáceis
        `,
        published: false
    },
    {
        id: 'article-3',
        slug: 'performance-em-aplicacoes-react-dicas-essenciais',
        title: 'Performance em aplicações React: Dicas essenciais',
        excerpt: 'Técnicas e boas práticas para otimizar o desempenho de suas aplicações React.',
        date: '2025-12-10',
        readTime: '10 min',
        tags: ['React', 'Performance', 'Otimização'],
        content: `
# Performance em aplicações React: Dicas essenciais

Performance é crucial para uma boa experiência do usuário. Veja como otimizar suas apps React.

## 1. Use React.memo

Evite re-renders desnecessários com React.memo para componentes que não mudam frequentemente.

## 2. Code Splitting

Divida seu código em chunks menores usando dynamic imports.

## 3. Lazy Loading

Carregue componentes apenas quando necessário.

\`\`\`javascript
const BlogSection = lazy(() => import('./components/BlogSection'));
\`\`\`

## 4. Otimize dependências

Use useMemo e useCallback quando apropriado.

## Conclusão

Pequenas otimizações podem fazer grande diferença na experiência do usuário.
        `,
        published: false
    },
    {
        id: 'article-4',
        slug: 'de-desenvolvedor-junior-a-senior-minha-jornada',
        title: 'De desenvolvedor júnior a sênior: Minha jornada',
        excerpt: 'Reflexões sobre 15 anos de carreira em desenvolvimento de software e lições aprendidas.',
        date: '2025-12-05',
        readTime: '12 min',
        tags: ['Carreira', 'Desenvolvimento', 'Experiência'],
        content: `
# De desenvolvedor júnior a sênior: Minha jornada

Com mais de 15 anos de experiência, aprendi muitas lições valiosas. Aqui estão algumas delas.

## Os primeiros anos

No início, tudo parecia complexo. A chave foi manter a curiosidade e continuar aprendendo.

## Especialização vs Generalização

Encontrei um equilíbrio entre ser especialista em algumas áreas e ter conhecimento amplo.

## Soft Skills importam

Comunicação, trabalho em equipe e empatia são tão importantes quanto habilidades técnicas.

## Nunca pare de aprender

A tecnologia evolui constantemente. Mantenha-se atualizado e adaptável.

## Compartilhe conhecimento

Mentorar outros desenvolvedores é gratificante e consolida seu próprio conhecimento.
        `,
        published: false
    }
];

// Função helper para buscar artigos
export const getPublishedArticles = () => {
    return articles
        .filter(article => article.published)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getArticleById = (id) => {
    return articles.find(article => article.id === id);
};

export const getArticleBySlug = (slug) => {
    return articles.find(article => article.slug === slug && article.published);
};

export const getArticlesByTag = (tag) => {
    return articles.filter(article => 
        article.published && article.tags.includes(tag)
    );
};

// Função para obter todas as tags únicas
export const getAllTags = () => {
    const tagsSet = new Set();
    articles.forEach(article => {
        if (article.published) {
            article.tags.forEach(tag => tagsSet.add(tag));
        }
    });
    return Array.from(tagsSet).sort();
};

// Functions with i18n support
export const getPublishedArticlesI18n = (language = 'pt-BR') => {
    return language === 'en-US' ? getPublishedArticlesEN() : getPublishedArticles();
};

export const getArticleByIdI18n = (id, language = 'pt-BR') => {
    return language === 'en-US' ? getArticleByIdEN(id) : getArticleById(id);
};

export const getArticleBySlugI18n = (slug, language = 'pt-BR') => {
    return language === 'en-US' ? getArticleBySlugEN(slug) : getArticleBySlug(slug);
};

export const getArticlesByTagI18n = (tag, language = 'pt-BR') => {
    return language === 'en-US' ? getArticlesByTagEN(tag) : getArticlesByTag(tag);
};

export const getAllTagsI18n = (language = 'pt-BR') => {
    return language === 'en-US' ? getAllTagsEN() : getAllTags();
};

