// src/App.jsx
import React, { useState } from 'react';
import SpaceBackground from './components/SpaceBackground';
import BlogSection from './components/BlogSection';
import PortfolioSection from './components/PortfolioSection';
import AboutSection from './components/AboutSection';
import TopNav from './components/TopNav';
import { ITEM_TYPES } from './data/source';
import { FiGithub, FiLinkedin, FiGlobe, FiMail, FiMousePointer } from 'react-icons/fi';
import styles from './App.module.css';

function App() {
  // Verifica hash na URL ao carregar para definir estado inicial
  const getInitialFilter = () => {
    const hash = window.location.hash;
    if (hash === '#sobre') return 'sobre';
    if (hash === '#projetos') return ITEM_TYPES.PROJECT;
    if (hash === '#blog') return 'blog';
    return null;
  };
  
  const [activeFilter, setActiveFilter] = useState(getInitialFilter);
  
  // Detectar se é mobile
  const [isMobile] = useState(() => {
    return window.innerWidth <= 768;
  });
  
  // Controle de visibilidade dos controles do background
  const [showControls, setShowControls] = useState(false);
  
  // Função chamada pelos botões de vitória e pelo menu de navegação
  const handleQuickAccess = (categoryName) => {
      // Verifica se é home
      if (categoryName === 'home') {
        setActiveFilter(null);
        window.location.hash = '';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Verifica se é sobre
      else if (categoryName === 'sobre') {
        setActiveFilter('sobre');
        window.location.hash = 'sobre';
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
      // Verifica se é blog
      else if (categoryName === 'blog') {
        setActiveFilter('blog');
        window.location.hash = 'blog';
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
      // Verifica se é projetos
      else if (categoryName === ITEM_TYPES.PROJECT || categoryName === 'projetos') {
        setActiveFilter(ITEM_TYPES.PROJECT);
        window.location.hash = 'projetos';
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      }
  };

  const handleClosePortfolio = () => {
    setActiveFilter(null);
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="container">
      <TopNav onNavigate={handleQuickAccess} />
      <SpaceBackground isMobile={isMobile} />
      <main className={`${styles.heroSection} ${activeFilter ? styles.hidden : ''}`}>
        
        <span className={styles.greeting}>OLÁ, MEU NOME É</span>
        <h1 className={styles.title}>Luiz Weber.</h1>
        <h2 className={styles.subtitle}>Sou desenvolvedor de sistemas.</h2>
        
        <p className={styles.introText}>
          Atuo como programador desde 2009. <br/>         
          Natural do Paraná, Brasil, tenho mais de 15 anos de experiência em backend e frontend.<br/>
<br/>
          Explore meu portfólio, veja meus projetos e trajetória profissional.  
        </p>
      </main>

      {/* Mostra a seção "Sobre" */}
      {activeFilter === 'sobre' && (
        <AboutSection onClose={handleClosePortfolio} />
      )}

      {/* Mostra a seção de projetos */}
      {activeFilter === ITEM_TYPES.PROJECT && (
        <PortfolioSection 
          filterType={activeFilter}
          onClose={handleClosePortfolio}
        />
      )}

      {/* Mostra o blog quando filtro for 'blog' ou quando não houver filtro ativo */}
      {activeFilter === 'blog' && (
        <BlogSection showCloseButton={true} onClose={handleClosePortfolio} />
      )}
      {!activeFilter && <BlogSection showCloseButton={false} />}

      <footer className={styles.footer}>
        <a href="https://github.com/luizwbr" target="_blank" rel="noopener" className={styles.footerLink} title="GitHub">
            <FiGithub />
        </a>
        <a href="https://linkedin.com/in/luizwbr" target="_blank" rel="noopener" className={styles.footerLink} title="LinkedIn">
            <FiLinkedin />
        </a>
        <a href="https://www.weber.eti.br" target="_blank" rel="noopener" className={styles.footerLink} title="Website">
            <FiGlobe />
        </a>
        <a href="mailto:luiz.weber@pm.me" target="_blank" rel="noopener" className={styles.emailLink} title="Entre em contato">
            <FiMail size="15" /> E-mail: <b>luiz.weber@pm.me</b>
        </a>
        <div className={styles.themeCredit}>
          Tema: <a href="https://github.com/luizwbr/cosmic-explorer-theme" target="_blank" rel="noopener" className={styles.themeCreditLink}>Cosmic Explorer</a>
        </div>
      </footer>

      {!isMobile && (
        <>
          <button 
            className={styles.toggleControlsButton}
            onClick={() => setShowControls(!showControls)}
            aria-label="Toggle background controls"
            title={showControls ? "Ocultar controles" : "Mostrar controles"}
          >
            <FiMousePointer size={20} />
          </button>
          
          {showControls && (
            <div className={styles.backgroundControls}>
              <div className={styles.controlsTitle}>
                <FiMousePointer size={16} />
                <span>Background Interativo</span>
              </div>
              <div className={styles.controlsList}>
                <div className={styles.controlItem}>
                  <span className={styles.controlKey}>Arrastar</span>
                  <span className={styles.controlDesc}>Rotacionar câmera</span>
                </div>
                <div className={styles.controlItem}>
                  <span className={styles.controlKey}>Scroll</span>
                  <span className={styles.controlDesc}>Zoom in/out</span>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;