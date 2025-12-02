// src/data/source.js

export const ITEM_TYPES = {
    PROJECT: 'Projeto',
    SKILL: 'Competência',
    BIO: 'Bio/Experiência',
};

export const portfolioData = [
    {
        id: 'bio-summary',
        type: ITEM_TYPES.BIO,
        title: 'Resumo Profissional',
        description: 'Graduado em Sistemas de Informação, pós-graduado em Engenharia de Software com ênfase em Testes, com 15 anos de experiência na área de Tecnologia da Informação (TI), atuando em pequenas e grandes empresas nacionais e multinacionais.',
        keywords: ['sobre', 'perfil', 'carreira', 'senior']
    },
    {
        id: 'exp-ame',
        type: ITEM_TYPES.BIO,
        title: 'Desenvolvedor de software Senior (atual)',
        description: 'Desenvolvimento e manutenção do ecossistema do Hydra PDV, utilizado em milhares de lojas no Brasil.',
        tags: ['Americanas', 'PDV', 'B2C', 'Hydra'],
        keywords: ['backend', 'frontend', 'banco de dados', 'remoto']
    },
    {
        id: 'exp-maxicon',
        type: ITEM_TYPES.BIO,
        title: 'Desenvolvedor Front End Angular [hibrido]',
        description: 'Atuação no setor de Pesquisa e Desenvolvimento na Maxicon (Toledo-PR), no projeto de modernização do ERP (Oracle Forms → AngularJS), criando componentes e automações, documentando processos, apoiando a equipe e desenvolvendo POCs para otimizar o desenvolvimento.',
        tags: ['Maxicon', 'AngularJS', 'Oracle Forms', 'ERP'],
        keywords: ['backend', 'frontend', 'banco de dados', 'híbrido']
    },
    {
        id: 'exp-totvs',
        type: ITEM_TYPES.BIO,
        title: 'Desenvolvedor de Software Sênior',
        description: 'Atuação na TOTVS (Cascavel-PR) por 8 anos, desenvolvendo front end com ReactJS, realizando mentoria e code reviews, criando soluções desktop em Node para data ingestion, prototipando interfaces com Adobe XD, processando arquivos com Apache NiFi/MiniFi e desenvolvendo projetos B2B em Magento 1.9.',
        tags: ['TOTVS', 'ReactJS', 'Node', 'Adobe XD', 'Apache NiFi', 'MiniFi', 'Magento 1.9'],
        keywords: ['frontend', 'data ingestion', 'B2B', 'CRM', 'híbrido']
    },
    {
        id: 'exp-orbital',
        type: ITEM_TYPES.BIO,
        title: 'Consultor em Desenvolvimento de Software [freelance]',
        description: 'Consultoria e desenvolvimento de software para a plataforma de e-commerce Orbital Commerce®, atuando por 5 meses em soluções e melhorias para o produto.',
        tags: ['Orbital Commerce', 'E-commerce', 'Consultoria'],
        keywords: ['desenvolvimento de software', 'freelance', 'e-commerce']
    },
    {
        id: 'exp-weberti',
        type: ITEM_TYPES.BIO,
        title: 'Proprietário',
        description: 'Fundador da Weber TI (Cascavel-PR), atuando na criação de conteúdo sobre desenvolvimento web e e-commerce, prestação de serviços e consultoria estratégica, realização de palestras e treinamentos, além do desenvolvimento e comercialização de plugins e componentes para Joomla.',
        tags: ['Weber TI', 'Joomla', 'E-commerce', 'Consultoria'],
        keywords: ['desenvolvimento web', 'plugins', 'treinamentos', 'conteúdo técnico', 'estratégia']
    },
    {
        id: 'exp-webgenium',
        type: ITEM_TYPES.BIO,
        title: 'Programador Master [presencial]',
        description: 'Atuação na Webgenium (Cascavel-PR) por 8 anos no desenvolvimento e manutenção de portais e sistemas em PHP/Joomla, criação de lojas virtuais com plataforma própria e VirtueMart, configuração de segurança para serviços web, suporte a Google Ads/Analytics/Webmaster Tools e otimizações de SEO.',
        tags: ['Webgenium', 'PHP', 'Joomla', 'VirtueMart', 'SEO', 'Google Ads', 'Google Analytics'],
        keywords: ['desenvolvimento web', 'e-commerce', 'segurança', 'otimização', 'presencial']
    },
    {
        id: 'skill-backend',
        type: ITEM_TYPES.SKILL,
        title: 'Backend Go / PHP / Node.js',
        description: 'Experiência na construção/manutenção de aplicações em Go, Node.js, PHP e Java',
        tags: ['Go', 'PHP', 'Node.js', 'Java'],
        keywords: ['backend', 'frontend', 'banco de dados']
    },
    {
        id: 'skill-frontend',
        type: ITEM_TYPES.SKILL,
        title: 'Frameworks Frontend',
        description: 'Desenvolvimento de interfaces reativas SPA e PWA.',
        tags: ['React', 'Vue.js', 'Angular', 'VanillaJS'],
        keywords: ['frontend', 'ui', 'ux']
    },
    {
        id: 'skill-banco-de-dados',
        type: ITEM_TYPES.SKILL,
        title: 'Banco de dados',
        description: 'Construção de queries customizadas',
        tags: ['MongoDB', 'MySQL', 'PostgreSQL', 'MariaDb', 'SQlite', 'Oracle'],
        keywords: ['infraestrutura', 'banco de dados', 'nuvem']
    },
    {
        id: 'proj-weber-site',
        type: ITEM_TYPES.PROJECT,
        title: 'Weber.eti.br (Este site)',
        description: 'Portfólio desenvolvido em React com implementação de motor de busca client-side (offline) usando Fuse.js para indexar competências e histórico.',
        tags: ['React', 'Vite', 'Fuse.js'],
        url: 'https://github.com/luizwbr/personal-website',
        keywords: ['site pessoal', 'react']
    },
    {
        id: 'proj-yaml2env',
        type: ITEM_TYPES.PROJECT,
        title: 'yaml-2-environment',
        description: 'Biblioteca Node.js que carrega um arquivo `.env.yml` e converte seus valores em variáveis de ambiente, com suporte a namespace, codificação personalizada e caminho customizável.',
        tags: ['Node.js', 'YAML', 'environment variables'],
        url: 'https://github.com/luizwbr/yaml-2-environment',
        keywords: ['env', 'configuração', 'automação', 'github']
    },
    {
        id: 'proj-chrome-input-highlight',
        type: ITEM_TYPES.PROJECT,
        title: 'Chrome Input Highlight',
        description: 'Extensão para navegador que destaca automaticamente entradas de texto em páginas web, facilitando testes exploratórios e interação rápida.',
        tags: ['Chrome Extension', 'JavaScript', 'Browser DevTools'],
        url: 'https://github.com/luizwbr/chrome-input-hightlight',
        keywords: ['teste exploratório', 'input highlight', 'automação', 'github']
    },
    {
        id: 'proj-ubuntu-workstation',
        type: ITEM_TYPES.PROJECT,
        title: 'Ubuntu Workstation Setup',
        description: 'Script de configuração para estação de desenvolvimento baseada em Ubuntu, instalando ferramentas como Git, VSCode, Node.js, Docker, entre outras.',
        tags: ['Shell', 'Automation', 'Ubuntu', 'Development Setup'],
        url: 'https://github.com/luizwbr/ubuntu-workstation',
        keywords: ['workstation', 'setup', 'dev environment', 'github']
    },


];