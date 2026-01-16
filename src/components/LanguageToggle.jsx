// src/components/LanguageToggle.jsx
import React from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import styles from './LanguageToggle.module.css';

const LanguageToggle = () => {
  const { currentLanguage, changeLanguage } = useLanguage();

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'pt-BR' ? 'en-US' : 'pt-BR';
    changeLanguage(newLang);
  };

  return (
    <button 
      className={styles.languageToggle} 
      onClick={toggleLanguage}
      aria-label={currentLanguage === 'pt-BR' ? 'Switch to English' : 'Mudar para Português'}
    >
      <span className={styles.flag}>
        {currentLanguage === 'pt-BR' ? '🇧🇷' : '🇺🇸'}
      </span>
      <span className={styles.label}>
        {currentLanguage === 'pt-BR' ? 'PT'  : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;
