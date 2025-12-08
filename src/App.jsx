// src/App.jsx
import React, { useState } from 'react';
import SearchOverlay from './components/SearchOverlay';
import VictoryMenu from './components/VictoryMenu'; // Importe o novo menu
import SpaceBackground from './components/SpaceBackground';
import { useGame } from './hooks/useGame';
import { useSearch } from './hooks/useSearch'; // Importe o search aqui também
import { FiSearch, FiGithub, FiLinkedin, FiGlobe, FiMail, FiMousePointer } from 'react-icons/fi';
import { Analytics } from "@vercel/analytics/next"
import styles from './App.module.css';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  
  // Detectar se é mobile
  const [isMobile] = useState(() => {
    return window.innerWidth <= 768;
  });
  
  // Estado da busca agora vive aqui no App
  const [searchQuery, setSearchQuery] = useState('');
  
  // Inicializamos a busca aqui para passar os resultados para o Overlay
  const { results, hasResults } = useSearch(searchQuery, setSearchQuery);
  
  // Inicializa o jogo
  const { progress,  unlockAll } = useGame();

  // Função chamada pelos botões de vitória
  const handleQuickAccess = (categoryName) => {
      setSearchQuery(categoryName); // Define o texto (ex: "Projeto")
      setIsSearchOpen(true);        // Abre o modal
  };

  const ctaButtonText = () => {
    return "Pesquisar no site";
  }

  return (
    <div className="container">
      <SpaceBackground isMobile={isMobile} />
      <main className={styles.heroSection}>
        
        <span className={styles.greeting}>OLÁ, MEU NOME É</span>
        <h1 className={styles.title}>Luiz Weber.</h1>
        <h2 className={styles.subtitle}>Sou desenvolvedor de sistemas.</h2>
        
        <p className={styles.introText}>
          Atuo como programador desde 2009. <br/>         
          Natural do Paraná, Brasil, tenho mais de 15 anos de experiência em backend e frontend.<br/>
<br/>
          Explore meu portfólio e descubra meus projetos, habilidades e trajetória profissional.  
        </p>

        <button 
            className={styles.ctaButton} 
            onClick={() => {
                setSearchQuery('');
                setIsSearchOpen(true);
            }}
        >
            <FiSearch /> {ctaButtonText()}
        </button>
        {progress < 100 && (
          <button 
              className={styles.ignoreButton} 
              onClick={() => {
                  setSearchQuery('');
                  setIsSearchOpen(false);
                  unlockAll();
              }}
          >
              Mostrar menu
          </button>
        )}
        {progress === 100 && isMenuOpen && (
            <VictoryMenu 
              onCategorySelect={handleQuickAccess}
              onClose={() => setIsMenuOpen(false)}
            />
        )}
        {progress === 100 && !isMenuOpen && (
          <button 
              className={styles.ignoreButton} 
              onClick={() => setIsMenuOpen(true)}
          >
              Mostrar menu
          </button>
        )}
      </main>

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
      </footer>

      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        query={searchQuery}
        setQuery={setSearchQuery}
        results={results}
        hasResults={hasResults}
      />
      <Analytics/>
      
      {!isMobile && (
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
    </div>
  );
}

export default App;