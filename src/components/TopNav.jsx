// src/components/TopNav.jsx
import React from 'react';
import { FiHome, FiFolder, FiTool, FiUser, FiBook } from 'react-icons/fi';
import { useLanguage } from '../i18n/LanguageContext';
import LanguageToggle from './LanguageToggle';
import styles from './TopNav.module.css';

const TopNav = ({ onNavigate }) => {
  const { t } = useLanguage();
  
  const menuItems = [
    { label: t.nav.home, icon: FiHome, action: 'home' },
    { label: t.nav.projects, icon: FiFolder, action: 'projetos' },
    { label: t.nav.blog, icon: FiBook, action: 'blog' },
    { label: t.nav.about, icon: FiUser, action: 'sobre' },
  ];

  const handleClick = (action) => {
    if (action === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      onNavigate('home');
    } else if (action === 'blog') {
      const blogSection = document.getElementById('blog');
      if (blogSection) {
        blogSection.scrollIntoView({ behavior: 'smooth' });
      }
      onNavigate('blog');
    } else if (action === 'sobre') {
      onNavigate('sobre');
    } else {
      onNavigate(action);
    }
  };

  return (
    <nav className={styles.topNav}>
      <div className={styles.navContainer}>
        <button className={styles.logo} onClick={() => handleClick('home')}>
          <img src="/icon.svg" alt="Logo" className={styles.logoImage} />
        </button>
        
        <ul className={styles.navMenu}>
          {menuItems.map((item) => (
            <li key={item.action} className={styles.navItem}>
              <button 
                onClick={() => handleClick(item.action)}
                className={styles.navLink}
              >
                <item.icon className={styles.navIcon} size={18} />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
        
        <LanguageToggle />
      </div>
    </nav>
  );
};

export default TopNav;
