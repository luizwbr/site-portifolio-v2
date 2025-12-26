// src/components/PortfolioCard.jsx
import React from 'react';
import { FiFolder, FiTool, FiUser, FiArrowRight, FiExternalLink } from 'react-icons/fi';
import styles from './PortfolioCard.module.css';

const PortfolioCard = ({ item, onClick }) => {
  const getIcon = () => {
    switch (item.type) {
      case 'Projeto':
        return <FiFolder size={24} />;
      case 'Competência':
        return <FiTool size={24} />;
      case 'Bio/Experiência':
        return <FiUser size={24} />;
      default:
        return <FiFolder size={24} />;
    }
  };

  // Verifica se é um projeto com link externo e não é este próprio site
  const isExternalProject = item.type === 'Projeto' && 
                           item.url && 
                           !item.title.toLowerCase().includes('este site');

  const handleClick = () => {
    if (isExternalProject) {
      // Abre o link externo em nova aba
      window.open(item.url, '_blank', 'noopener,noreferrer');
    } else if (item.type !== 'Projeto' || !item.url) {
      // Para outros tipos ou projetos sem URL, abre o overlay
      onClick(item);
    }
    // Se é "este site", não faz nada
  };

  // Determina se deve mostrar o botão
  const shouldShowButton = item.type !== 'Projeto' || 
                           (item.url && !item.title.toLowerCase().includes('este site'));

  return (
    <article className={styles.portfolioCard} onClick={handleClick}>
      <div className={styles.cardHeader}>
        <div className={styles.iconContainer}>
          {getIcon()}
        </div>
        <span className={styles.typeLabel}>{item.type}</span>
      </div>
      
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.description}>{item.description}</p>
      
      {item.tags && item.tags.length > 0 && (
        <div className={styles.tags}>
          {item.tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}

      {item.keywords && item.keywords.length > 0 && (
        <div className={styles.keywords}>
          {item.keywords.slice(0, 3).map((keyword, index) => (
            <span key={index} className={styles.keyword}>
              {keyword}
            </span>
          ))}
        </div>
      )}
      
      {shouldShowButton && (
        <button className={styles.viewMore}>
          {isExternalProject ? (
            <>
              Ver no GitHub <FiExternalLink size={16} />
            </>
          ) : (
            <>
              Ver detalhes <FiArrowRight size={16} />
            </>
          )}
        </button>
      )}
    </article>
  );
};

export default PortfolioCard;
