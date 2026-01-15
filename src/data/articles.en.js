// src/data/articles.en.js

// Function to generate slug from title
export const generateSlugEN = (title) => {
    return title
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .trim()
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-'); // Remove duplicate hyphens
};

export const articlesEN = [
    {
        id: 'article-2',
        slug: 'i-had-a-company-once-sharing-with-you',
        title: 'I had a company once: sharing with you',
        excerpt: 'The story of how I created and closed my own e-commerce plugins and integrations company, and the lessons learned in the process.',
        date: '2026-01-15',
        readTime: '8 min',
        tags: ['Entrepreneurship', 'E-commerce', 'Career', 'Lessons'],
        content: `

In 2016, I had just left Webgenium, the main website and e-commerce agency in the Cascavel region.

At a time when we didn't have the convenience that AI has today, social media was limited to Facebook and Twitter, WIX websites were just beginning, and the demand for websites was huge.

## The e-commerce landscape in 2016

Speaking of e-commerce, Amazon hadn't arrived in Brazil yet, Mercado Livre didn't have the reputation it has today, and we didn't even know Shopee existed.

There were several agencies specialized in creating websites and e-commerce platforms, and the company where I worked was like that.

We created many websites, tools, integrations with payment gateways (Cielo, Redecard, PagSeguro, etc.), in short, it was an interesting time.

In an attempt to speed up website creation, we even created a very interesting tool that combined WHMCS + Joomla + automation to deploy a basic site with template selection in a matter of minutes: **SiteKit**. The domain [sitekit.com.br](http://sitekit.com.br) still belongs to the company.

## The business idea

But that's not even the point. What's interesting is that with this e-commerce demand, I was working on the side, selling e-commerce plugins and integrations (Joomla / Virtuemart and later Wordpress) to other companies or agencies.

Each plugin had different prices, for example: **R$ 289 per site** with one year of support and updates included.

Well, I thought I had a one-person startup.

I ended up deciding to invest my time in this and go solo, with my own small business registration (MEI).

## The reality of the business

I consulted with SEBRAE at the time, I thought this process was viable, but in practice I was working too much for the return I wasn't getting.

For each new customer, even with ready-made tutorials and an installation and configuration process via Joomla's interface, there was usually a bunch of emails exchanged between me and the customer to configure a new site.

When it came to Cielo configuration, for example, you had to manually fill out a form to activate the store and then be able to activate payment.

### The scalability problem

In short, I thought this whole process was viable, but **the more sales, the more work**. In other words, it wasn't viable to keep the business running.

Bottom line: plugin sales decreased so much that I couldn't sustain myself and had to close the company.

## The best decision

But it was the **best decision I made at that moment**, so I could focus on something very important: being a father.

## Lessons learned

1. **Support doesn't scale** - A product that requires a lot of manual support per customer is not scalable
2. **Automation is essential** - If you can't automate onboarding, rethink the model
3. **Time has value** - More sales doesn't always mean more success if it consumes all your time
4. **Priorities change** - Sometimes closing a business is the smartest decision
5. **Experience is gold** - I learned a lot about e-commerce, payments, and customer service

Today I look back and see that experience was fundamental to my career. I learned in practice what works and what doesn't work in a digital business.

What about you? Have you tried entrepreneurship? Share your experience in the comments!
        `,
        published: true
    },
    {
        id: 'article-1',
        slug: 'how-to-build-an-interactive-portfolio-with-react',
        title: 'How to build an interactive portfolio with React',
        excerpt: 'The story of how I transformed a simple portfolio into an interactive experience, with gamification, intuitive navigation and modern design.',
        date: '2025-12-26',
        readTime: '15 min',
        tags: ['React', 'Frontend', 'Portfolio', 'UX'],
        content: `

Creating a portfolio is one of the first tasks for any developer. But turning it into something differentiated? That's another story.

In this article, I'll tell you how this portfolio evolved from a simple idea to a complete interactive experience. It's not a step-by-step tutorial, it's the real story of how I built something unique.

## The initial idea: Gamification

The first version had a different proposal: **turn the portfolio into a game**.

The idea was simple. Instead of just listing projects and skills, the visitor would need to "explore" the site. A search system that worked as a discovery engine.

- Type something -> Find matches
- Find items -> Unlock content
- Unlock everything -> Get access to the menu

It was fun. But it had a problem: **nobody likes to work to see a portfolio**.

## The evolution: UX comes first

I realized that gamification was in the way. People wanted to access information quickly. So I simplified.

### Fixed navigation menu

I added a menu at the top with 4 direct links:
- **Home**: Back to the beginning
- **Projects**: List of projects in cards
- **Blog**: Technical articles
- **About**: Skills + Professional trajectory

Each section has its own URL. You can share \`#projects\` or \`#blog\` directly.

### Card system

I replaced the search with visual cards. It was much better.

Each project now has:
- Identifier icon
- Clear title and description
- Technology tags
- Direct link to GitHub (when applicable)

One card per line. Clean visual. Easy to scan.

## Technical features

### 1. Interactive background with Three.js

The background is not static. It's a 3D simulation of spatial particles that responds to scroll and mouse movements.

\`\`\`javascript
// Smooth camera rotation
camera.rotation.x += (mouseY - camera.rotation.x) * 0.05;
camera.rotation.y += (mouseX - camera.rotation.y) * 0.05;
\`\`\`

On mobile? Disabled. Performance matters.

### 2. Integrated blog

I added a complete articles section:
- Markdown rendering with react-markdown
- Tag system with filters
- Shareable URLs per article
- Social sharing buttons (Twitter, LinkedIn, Facebook)

Each article has its slug: \`#article/how-to-build-an-interactive-portfolio-with-react\`

### 3. Unified "About" section

I combined Skills and Biography into a single page:

**Technical Skills** (card grid)
- Backend: Go, PHP, Node.js
- Frontend: React, Vue, Angular
- Database: MongoDB, PostgreSQL, MySQL

**Professional Journey** (timeline)
- Vertical timeline
- Experience cards
- Tags for technologies used

## Technical stack

\`\`\`json
{
  "framework": "React 18",
  "build": "Vite",
  "3d": "Three.js",
  "markdown": "react-markdown",
  "icons": "react-icons"
}
\`\`\`

### Why Vite?

Simple: it's **fast**.

Hot Module Replacement in milliseconds. Build optimized automatically. No complex configuration.

### Why Three.js?

Because why not? lol

Three.js allows you to create impressive visual experiences without much effort. The space background uses less than 200 lines of code.

## Componentization

Everything is a reusable component:

- \`TopNav\` -> Navigation menu
- \`BlogCard\` -> Article card
- \`PortfolioCard\` -> Project card
- \`AboutSection\` -> About page
- \`ArticleModal\` -> Article viewer
- \`ShareButton\` -> Social sharing

Each one with its CSS Module. No style conflicts. Easy to maintain.

## Routing system

I didn't use React Router. Why?

It's a simple SPA. Hash routing solves it:

\`\`\`javascript
// Initial state based on URL
const getInitialFilter = () => {
  const hash = window.location.hash;
  if (hash === '#about') return 'about';
  if (hash === '#projects') return 'projects';
  if (hash === '#blog') return 'blog';
  return null;
};
\`\`\`

Fewer dependencies = better performance.

## Responsiveness

Mobile-first always.

3-column grid on desktop -> 1 column on mobile. Full menu -> icons only. 3D background -> disabled.

Main breakpoint: 768px.

\`\`\`css
@media (max-width: 768px) {
  .itemsGrid {
    grid-template-columns: 1fr;
  }
}
\`\`\`

## Details that make a difference

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

### Micro-animations
\`\`\`css
.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(100, 255, 218, 0.2);
}
\`\`\`

## AI as a productivity accelerator

One of the tools that made the most difference in this project was the use of **AI during development**.

I used **VS Code with GitHub Copilot and Claude Sonnet 4.5** at all stages of the project.

It wasn't about letting AI write everything. It was about **accelerating decisions and implementations**:

### How I used AI in the project

**Component generation**: Create the base structure of new React components with correct props and types.

**Refactoring**: Transform repetitive code into reusable components without errors.

**CSS and styles**: Generate variations of glassmorphism, micro-animations and responsiveness.

**Debugging**: Identify problems in complex code (especially with Three.js).

**Architecture**: Suggestions for patterns, such as using hash routing instead of React Router.

### Real example

The hash routing system was Claude's suggestion:

\`\`\`javascript
const getInitialFilter = () => {
  const hash = window.location.hash;
  if (hash === '#about') return 'about';
  // ...
};
\`\`\`

I implemented, tested, adjusted. It worked perfectly without extra dependencies.

### The golden rule

**AI doesn't replace technical knowledge. It amplifies what you already know.**

Use it as pair programming: question, validate, learn. Never accept code blindly.

## The code is on GitHub

This portfolio is open source. Feel free to comment or contribute.

[github.com/luizwbr/site-portifolio-v2](https://github.com/luizwbr/site-portifolio-v2)
        `,
        published: true
    }
];

// Helper function to fetch articles
export const getPublishedArticlesEN = () => {
    return articlesEN
        .filter(article => article.published)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const getArticleByIdEN = (id) => {
    return articlesEN.find(article => article.id === id);
};

export const getArticleBySlugEN = (slug) => {
    return articlesEN.find(article => article.slug === slug && article.published);
};

export const getArticlesByTagEN = (tag) => {
    return articlesEN.filter(article => 
        article.published && article.tags.includes(tag)
    );
};

// Function to get all unique tags
export const getAllTagsEN = () => {
    const tagsSet = new Set();
    articlesEN.forEach(article => {
        if (article.published) {
            article.tags.forEach(tag => tagsSet.add(tag));
        }
    });
    return Array.from(tagsSet).sort();
};
