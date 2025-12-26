// src/components/BlogCard.jsx
import React from 'react';
import { FiClock, FiCalendar, FiArrowRight } from 'react-icons/fi';
import styles from './BlogCard.module.css';

const BlogCard = ({ article, onClick, onTagClick }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleTagClick = (e, tag) => {
    e.stopPropagation(); // Previne que abra o artigo
    if (onTagClick) {
      onTagClick(tag);
    }
  };

  return (
    <article className={styles.blogCard} onClick={() => onClick(article)}>
      <div className={styles.cardHeader}>
        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <FiCalendar size={14} />
            {formatDate(article.date)}
          </span>
          <span className={styles.metaItem}>
            <FiClock size={14} />
            {article.readTime}
          </span>
        </div>
      </div>
      
      <h3 className={styles.title}>{article.title}</h3>
      <p className={styles.excerpt}>{article.excerpt}</p>
      
      <div className={styles.cardFooter}>
        <div className={styles.tags}>
          {article.tags.map((tag, index) => (
            <span 
              key={index} 
              className={styles.tag}
              onClick={(e) => handleTagClick(e, tag)}
              title={`Filtrar por ${tag}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <button className={styles.readMore}>
          Ler mais <FiArrowRight size={16} />
        </button>
      </div>
    </article>
  );
};

export default BlogCard;
