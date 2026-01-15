// src/data/source.en.js

export const ITEM_TYPES_EN = {
    PROJECT: 'Project',
    SKILL: 'Skill',
    BIO: 'Bio/Experience',
};

export const portfolioDataEN = [
    {
        id: 'exp-ame',
        type: ITEM_TYPES_EN.BIO,
        title: 'Senior Software Developer (current)',
        description: 'Development and maintenance of the Hydra PDV ecosystem, used in thousands of stores across Brazil.',
        tags: ['Americanas', 'PDV', 'B2C', 'Hydra'],
        keywords: ['backend', 'frontend', 'database', 'remote']
    },
    {
        id: 'exp-maxicon',
        type: ITEM_TYPES_EN.BIO,
        title: 'Front End Angular Developer',
        description: 'Working in the Research and Development sector at Maxicon (Toledo-PR), on the ERP modernization project (Oracle Forms -> AngularJS), creating components and automations, documenting processes, supporting the team and developing POCs to optimize development.',
        tags: ['Maxicon', 'AngularJS', 'Oracle Forms', 'ERP'],
        keywords: ['backend', 'frontend', 'database', 'hybrid']
    },
    {
        id: 'exp-totvs',
        type: ITEM_TYPES_EN.BIO,
        title: 'Senior Software Developer',
        description: 'Working at TOTVS (Cascavel-PR) for 8 years, developing front end with ReactJS, performing mentoring and code reviews, creating desktop solutions in Node for data ingestion, prototyping interfaces with Adobe XD, processing files with Apache NiFi/MiniFi and developing B2B projects in Magento 1.9.',
        tags: ['TOTVS', 'ReactJS', 'Node', 'Adobe XD', 'Apache NiFi', 'MiniFi', 'Magento 1.9'],
        keywords: ['frontend', 'data ingestion', 'B2B', 'CRM', 'hybrid']
    },
    {
        id: 'exp-orbital',
        type: ITEM_TYPES_EN.BIO,
        title: 'Software Development Consultant [freelance]',
        description: 'Consulting and software development for the Orbital Commerce® e-commerce platform, working for 5 months on solutions and improvements for the product.',
        tags: ['Orbital Commerce', 'E-commerce', 'Consulting'],
        keywords: ['software development', 'freelance', 'e-commerce']
    },
    {
        id: 'exp-weberti',
        type: ITEM_TYPES_EN.BIO,
        title: 'Owner',
        description: 'Founder of Weber TI (Cascavel-PR), working on creating content about web development and e-commerce, providing services and strategic consulting, conducting lectures and training, as well as developing and commercializing plugins and components for Joomla.',
        tags: ['Weber TI', 'Joomla', 'E-commerce', 'Consulting'],
        keywords: ['web development', 'plugins', 'training', 'technical content', 'strategy']
    },
    {
        id: 'exp-webgenium',
        type: ITEM_TYPES_EN.BIO,
        title: 'Master Programmer',
        description: 'Working at Webgenium (Cascavel-PR) for 8 years in the development and maintenance of portals and systems in PHP/Joomla, creating online stores with proprietary platform and VirtueMart, configuring security for web services, supporting Google Ads/Analytics/Webmaster Tools and SEO optimizations.',
        tags: ['Webgenium', 'PHP', 'Joomla', 'VirtueMart', 'SEO', 'Google Ads', 'Google Analytics'],
        keywords: ['web development', 'e-commerce', 'security', 'optimization', 'on-site']
    },
    {
        id: 'skill-backend',
        type: ITEM_TYPES_EN.SKILL,
        title: 'Backend Go / PHP / Node.js',
        description: 'Experience in building/maintaining applications in Go, Node.js, PHP and Java',
        tags: ['Go', 'PHP', 'Node.js', 'Java'],
        keywords: ['backend', 'frontend', 'database']
    },
    {
        id: 'skill-frontend',
        type: ITEM_TYPES_EN.SKILL,
        title: 'Frontend Frameworks',
        description: 'Development of reactive SPA and PWA interfaces.',
        tags: ['React', 'Vue.js', 'Angular', 'VanillaJS'],
        keywords: ['frontend', 'ui', 'ux']
    },
    {
        id: 'skill-banco-de-dados',
        type: ITEM_TYPES_EN.SKILL,
        title: 'Database',
        description: 'Building custom queries',
        tags: ['MongoDB', 'MySQL', 'PostgreSQL', 'MariaDb', 'SQlite', 'Oracle'],
        keywords: ['infrastructure', 'database', 'cloud']
    },
    {
        id: 'proj-yaml2env',
        type: ITEM_TYPES_EN.PROJECT,
        title: 'yaml-2-environment',
        description: 'Node.js library that loads a `.env.yml` file and converts its values into environment variables, with namespace support, custom encoding and customizable path.',
        tags: [],
        url: 'https://github.com/luizwbr/yaml-2-environment',
        keywords: ['env', 'configuration', 'automation', 'github']
    },
    {
        id: 'proj-chrome-input-highlight',
        type: ITEM_TYPES_EN.PROJECT,
        title: 'Chrome Input Highlight',
        description: 'Browser extension that automatically highlights text inputs on web pages, facilitating exploratory testing and quick interaction.',
        tags: [],
        url: 'https://github.com/luizwbr/chrome-input-hightlight',
        keywords: ['exploratory testing', 'input highlight', 'automation', 'github']
    },
    {
        id: 'proj-ubuntu-workstation',
        type: ITEM_TYPES_EN.PROJECT,
        title: 'Ubuntu Workstation Setup',
        description: 'Configuration script for Ubuntu-based development workstation, installing tools like Git, VSCode, Node.js, Docker, among others.',
        tags: [],
        url: 'https://github.com/luizwbr/ubuntu-workstation',
        keywords: ['workstation', 'setup', 'dev environment', 'github']
    },
    {
        id: 'proj-github-infographic',
        type: ITEM_TYPES_EN.PROJECT,
        title: 'GitHub Repositories - Trending Repositories',
        description: 'Tool that generates custom infographics with GitHub statistics, allowing attractive visualizations of the user\'s profile and activities.',
        tags: [],
        url: 'https://github.com/luizwbr/github-infographic',
        keywords: ['github', 'infographic', 'statistics', 'github']
    },
    {
        id: 'proj-design-patterns-examples',
        type: ITEM_TYPES_EN.PROJECT,
        title: 'Design Patterns Examples',
        description: 'Repository with practical examples of various design patterns, facilitating the learning and application of these concepts in real projects.',
        url: "https://github.com/luizwbr/design-patterns-examples",
        tags: [],
        keywords: ['design patterns', 'examples', 'learning', 'github'],
    },
    {
        id: 'proj-cosmic-explorer-theme',
        type: ITEM_TYPES_EN.PROJECT,
        title: 'Cosmic Explorer Theme',
        description: 'A dark theme for VS Code inspired by outer space, with vibrant colors of neon blues, energetic oranges and cosmic tones.',
        tags: [],
        url: 'https://github.com/luizwbr/cosmic-explorer-theme',
        keywords: ['theme', 'vscode', 'cosmic explorer', 'github']
    },
    {
        id: 'proj-nools-rust',
        type: ITEM_TYPES_EN.PROJECT,
        title: 'Nools Rust',
        description: 'Implementation of the Nools rules engine in Rust, offering high performance and security for applications that require complex business rule processing.',
        tags: [],
        url: 'https://github.com/luizwbr/nools-rust',
        keywords: ['nools', 'rust', 'rules engine', 'github']
    }
];
