// src/components/TopNav.jsx
import React from 'react';
import { FiHome, FiFolder, FiTool, FiUser, FiBook } from 'react-icons/fi';
import styles from './TopNav.module.css';

const TopNav = ({ onNavigate }) => {
  const menuItems = [
    { label: 'Home', icon: FiHome, action: 'home' },
    { label: 'Projetos', icon: FiFolder, action: 'projetos' },
    { label: 'Blog', icon: FiBook, action: 'blog' },
    { label: 'Sobre', icon: FiUser, action: 'sobre' },
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
        <div className={styles.logo}>
          <span className={styles.logoText}>LW</span>
        </div>
        
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
      </div>
    </nav>
  );
};

export default TopNav;
