// src/components/ArticleModal.jsx
import React, { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import ShareButton from './ShareButton';
import { FiX, FiClock, FiCalendar } from 'react-icons/fi';
import styles from './ArticleModal.module.css';

const ArticleModal = ({ article, onClose, onTagClick }) => {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    
    // Handle ESC key
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleTagClick = (tag) => {
    onClose(); // Fecha o modal
    if (onTagClick) {
      onTagClick(tag);
    }
  };

  const articleUrl = `${window.location.origin}${window.location.pathname}#artigo/${article.slug}`;

  return (
    <div className={styles.modalBackdrop} onClick={handleBackdropClick}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">
          <FiX size={24} />
        </button>

        <article className={styles.article}>
          <header className={styles.articleHeader}>
            <h1 className={styles.articleTitle}>{article.title}</h1>
            
            <div className={styles.articleMeta}>
              <span className={styles.metaItem}>
                <FiCalendar size={16} />
                {formatDate(article.date)}
              </span>
              <span className={styles.metaItem}>
                <FiClock size={16} />
                {article.readTime}
              </span>
            </div>

            <div className={styles.tagsAndShare}>
              <div className={styles.tags}>
                {article.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className={styles.tag}
                    onClick={() => handleTagClick(tag)}
                    title={`Filtrar por ${tag}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <ShareButton article={article} url={articleUrl} />
            </div>
          </header>

          <div className={styles.articleBody}>
            <ReactMarkdown>{article.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
};

export default ArticleModal;
