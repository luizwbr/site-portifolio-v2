// src/i18n/LanguageContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { languages, defaultLanguage } from './index';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState(() => {
    // Tenta pegar do localStorage
    const saved = localStorage.getItem('language');
    if (saved && languages[saved]) {
      return saved;
    }
    // Se não, usa o navegador
    const browserLang = navigator.language || navigator.userLanguage;
    if (browserLang.startsWith('pt')) {
      return 'pt-BR';
    }
    return 'en-US';
  });

  const t = languages[currentLanguage];

  const changeLanguage = (lang) => {
    if (languages[lang]) {
      setCurrentLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  useEffect(() => {
    // Atualiza o atributo lang do HTML
    document.documentElement.lang = currentLanguage === 'pt-BR' ? 'pt' : 'en';
  }, [currentLanguage]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
