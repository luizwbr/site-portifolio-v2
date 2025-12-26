// src/components/PortfolioSection.jsx
import React from 'react';
import PortfolioCard from './PortfolioCard';
import { portfolioData, ITEM_TYPES } from '../data/source';
import { FiFolder, FiTool, FiUser, FiX } from 'react-icons/fi';
import styles from './PortfolioSection.module.css';

const PortfolioSection = ({ filterType, onClose }) => {
  const filteredItems = portfolioData.filter(item => item.type === filterType);

  const getIcon = () => {
    switch (filterType) {
      case ITEM_TYPES.PROJECT:
        return <FiFolder size={32} />;
      case ITEM_TYPES.SKILL:
        return <FiTool size={32} />;
      case ITEM_TYPES.BIO:
        return <FiUser size={32} />;
      default:
        return <FiFolder size={32} />;
    }
  };

  const getTitle = () => {
    switch (filterType) {
      case ITEM_TYPES.PROJECT:
        return 'Projetos';
      case ITEM_TYPES.SKILL:
        return 'Competências';
      case ITEM_TYPES.BIO:
        return 'Biografia & Experiência';
      default:
        return 'Portfolio';
    }
  };

  const getSubtitle = () => {
    switch (filterType) {
      case ITEM_TYPES.PROJECT:
        return (
          <>
            Veja alguns projetos que estive trabalhando recentemente. Mais projetos no meu{' '}
            <a 
              href="https://github.com/luizwbr" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              GitHub
            </a>
            .
          </>
        );
      case ITEM_TYPES.SKILL:
        return 'Tecnologias e habilidades que domino';
      case ITEM_TYPES.BIO:
        return 'Minha trajetória profissional e experiências';
      default:
        return '';
    }
  };

  return (
    <>
      <section className={styles.portfolioSection} id="portfolio">
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">
          <FiX size={24} />
        </button>

        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <div className={styles.iconWrapper}>
              {getIcon()}
            </div>
            <h2 className={styles.sectionTitle}>{getTitle()}</h2>
          </div>
          <p className={styles.sectionSubtitle}>{getSubtitle()}</p>
        </div>

        <div className={styles.itemsGrid}>
          {filteredItems.map((item) => (
            <PortfolioCard 
              key={item.id} 
              item={item} 
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className={styles.emptyState}>
            <p>Nenhum item encontrado.</p>
          </div>
        )}
      </section>
    </>
  );
};

export default PortfolioSection;
