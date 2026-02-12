// src/components/PromotionalBanner.jsx
import React from 'react';
import { FiExternalLink } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './PromotionalBanner.module.css';

const PromotionalBanner = () => {
  const { t } = useLanguage();

  return (
    <div className={styles.bannerContainer}>
      <div className={styles.bannerTitle}>
        {t.promotional.title}
      </div>
      <div className={styles.cardsContainer}>
        <a 
          href="https://deviantart.com/luizwbr" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.promoCard}
        >
          <div className={styles.cardIcon}>🎨</div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{t.promotional.deviantart.title}</h3>
            <p className={styles.cardDescription}>
              {t.promotional.deviantart.description}
            </p>
          </div>
          <FiExternalLink className={styles.externalIcon} />
        </a>

        <a 
          href="https://www.linkedin.com/newsletters/resumo-do-resumo-dev-7388427161977733120/" 
          target="_blank" 
          rel="noopener noreferrer"
          className={styles.promoCard}
        >
          <div className={styles.cardIcon}>📰</div>
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{t.promotional.newsletter.title}</h3>
            <p className={styles.cardDescription}>
              {t.promotional.newsletter.description}
            </p>
          </div>
          <FiExternalLink className={styles.externalIcon} />
        </a>
      </div>
    </div>
  );
};

export default PromotionalBanner;
