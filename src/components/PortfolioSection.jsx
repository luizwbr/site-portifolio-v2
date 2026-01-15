// src/components/PortfolioSection.jsx
import React from 'react';
import PortfolioCard from './PortfolioCard';
import { getPortfolioData, getItemTypes } from '../data/source';
import { useLanguage } from '../i18n/LanguageContext';
import { FiFolder, FiTool, FiUser, FiX } from 'react-icons/fi';
import styles from './PortfolioSection.module.css';

const PortfolioSection = ({ filterType, onClose }) => {
  const { t, currentLanguage } = useLanguage();
  const portfolioData = getPortfolioData(currentLanguage);
  const ITEM_TYPES = getItemTypes(currentLanguage);
  
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
        return t.projects.title;
      case ITEM_TYPES.SKILL:
        return t.about.technicalSkills;
      case ITEM_TYPES.BIO:
        return t.about.professionalPath;
      default:
        return 'Portfolio';
    }
  };

  const getSubtitle = () => {
    switch (filterType) {
      case ITEM_TYPES.PROJECT:
        return (
          <>
            {t.projects.subtitle}{' '}
            <a 
              href="https://github.com/luizwbr" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.githubLink}
            >
              {t.projects.github}
            </a>
            .
          </>
        );
      case ITEM_TYPES.SKILL:
        return t.about.technicalSkills;
      case ITEM_TYPES.BIO:
        return t.about.professionalPath;
      default:
        return '';
    }
  };

  return (
    <>
      <section className={styles.portfolioSection} id="portfolio">
        <button className={styles.closeButton} onClick={onClose} aria-label={t.projects.close}>
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
            <p>{t.projects.noItems}</p>
          </div>
        )}
      </section>
    </>
  );
};

export default PortfolioSection;
