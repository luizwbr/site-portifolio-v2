// src/App.jsx
import React, { useState } from 'react';
import SearchOverlay from './components/SearchOverlay';
import GamificationBar from './components/GamificationBar';
import VictoryMenu from './components/VictoryMenu'; // Importe o novo menu
import { useGame } from './hooks/useGame';
import { useSearch } from './hooks/useSearch'; // Importe o search aqui também
import { FiSearch, FiGithub, FiLinkedin, FiGlobe, FiMail } from 'react-icons/fi';
import styles from './App.module.css';

function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  
  // Estado da busca agora vive aqui no App
  const [searchQuery, setSearchQuery] = useState('');
  
  // Inicializamos a busca aqui para passar os resultados para o Overlay
  const { results, hasResults } = useSearch(searchQuery, setSearchQuery);
  
  // Inicializa o jogo
  const { progress, unlockedCount, totalItems, unlockItems, unlockedIds, unlockAll } = useGame();

  // Função chamada pelos botões de vitória
  const handleQuickAccess = (categoryName) => {
      setSearchQuery(categoryName); // Define o texto (ex: "Projeto")
      setIsSearchOpen(true);        // Abre o modal
  };

  const ctaButtonText = (progress) => {
    if (progress === 0) return "Iniciar Experimento de Busca";
    if (progress < 100) return `Continuar Buscando... (${progress}%)`;
    return "Pesquisar no portfólio";
  }

  return (
    <div className="container">
      <main className={styles.heroSection}>
        
        <span className={styles.greeting}>OLÁ, MEU NOME É</span>
        <h1 className={styles.title}>Luiz Weber.</h1>
        <h2 className={styles.subtitle}>Sou desenvolvedor de sistemas.</h2>
        
        <p className={styles.introText}>
          Sou um desenvolvedor de sistemas focado em criar arquiteturas robustas e escaláveis. <br/>
          Este portfólio é um <b>experimento</b>: em vez de navegar, você <b>pesquisa</b>.<br/>
          Todos os dados sobre meus projetos, skills e carreira estão indexados localmente aqui.
        </p>

        <button 
            className={styles.ctaButton} 
            onClick={() => {
                setSearchQuery('');
                setIsSearchOpen(true);
            }}
        >
            <FiSearch /> {ctaButtonText(progress)}
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
              Ignorar experimento e desbloquear tudo
          </button>
        )}
        {progress === 100 && (
            <VictoryMenu onCategorySelect={handleQuickAccess} />
        )}
      </main>

      <footer className={styles.footer}>
        <a href="https://github.com/luizwbr" target="_blank" rel="noopener" className={styles.footerLink} title="GitHub">
            <FiGithub />
        </a>
        <a href="https://linkedin.com/in/luizwbr" target="_blank" rel="noopener" className={styles.footerLink} title="LinkedIn">
            <FiLinkedin />
        </a>
        <a href="https://weber.eti.br" target="_blank" rel="noopener" className={styles.footerLink} title="Website">
            <FiGlobe />
        </a>
        <a href="mailto:luiz.weber@pm.me" target="_blank" rel="noopener" className={styles.emailLink} title="Entre em contato">
            <FiMail size="15" /> E-mail: <a href="mailto:luiz.weber@pm.me">luiz.weber@pm.me</a>
        </a>
      </footer>

      <GamificationBar 
        progress={progress} 
        unlockedCount={unlockedCount} 
        total={totalItems} 
      />
      <SearchOverlay 
        isOpen={isSearchOpen} 
        onClose={() => setIsSearchOpen(false)}
        onResultsFound={unlockItems}
        unlockedIds={unlockedIds}
        query={searchQuery}
        setQuery={setSearchQuery}
        results={results}
        hasResults={hasResults}
      />
    </div>
  );
}

export default App;