// src/components/BlogSection.jsx
import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import ArticleModal from './ArticleModal';
import { getPublishedArticles, getArticleBySlug, getArticlesByTag, getAllTags } from '../data/articles';
import { FiBook, FiX } from 'react-icons/fi';
import styles from './BlogSection.module.css';

const BlogSection = ({ showCloseButton, onClose }) => {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const allArticles = getPublishedArticles();
  const [articles, setArticles] = useState(allArticles);
  const allTags = getAllTags();

  const handleTagFilter = (tag) => {
    if (selectedTag === tag) {
      // Se já está filtrado por essa tag, remove o filtro
      setSelectedTag(null);
      setArticles(allArticles);
      window.location.hash = '';
    } else {
      setSelectedTag(tag);
      setArticles(getArticlesByTag(tag));
      window.location.hash = `tag/${tag}`;
    }
  };

  const clearFilter = () => {
    setSelectedTag(null);
    setArticles(allArticles);
    window.location.hash = '';
  };

  useEffect(() => {
    // Verificar se há um artigo na URL
    const hash = window.location.hash;
    if (hash.startsWith('#artigo/')) {
      const slug = hash.replace('#artigo/', '');
      const article = getArticleBySlug(slug);
      if (article) {
        setSelectedArticle(article);
      }
    }
    // Verificar se há uma tag na URL
    if (hash.startsWith('#tag/')) {
      const tag = decodeURIComponent(hash.replace('#tag/', ''));
      handleTagFilter(tag);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    window.location.hash = `artigo/${article.slug}`;
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
    window.location.hash = selectedTag ? `tag/${selectedTag}` : '';
  };

  return (
    <section className={styles.blogSection} id="blog">
      {showCloseButton && (
        <button className={styles.closeButton} onClick={onClose} aria-label="Fechar">
          <FiX size={24} />
        </button>
      )}

      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <FiBook className={styles.icon} size={32} />
          <h2 className={styles.sectionTitle}>Artigos</h2>
        </div>
        <p className={styles.sectionSubtitle}>
          Compartilhando conhecimentos e experiências sobre desenvolvimento de software
        </p>
      </div>

      {/* Filtros de Tags */}
      <div className={styles.tagsFilter}>
        <span className={styles.filterLabel}>Filtrar por:</span>
        <div className={styles.tagsList}>
          {allTags.map((tag) => (
            <button
              key={tag}
              className={`${styles.filterTag} ${selectedTag === tag ? styles.filterTagActive : ''}`}
              onClick={() => handleTagFilter(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
        {selectedTag && (
          <button className={styles.clearFilter} onClick={clearFilter}>
            <FiX size={16} /> Limpar filtro
          </button>
        )}
      </div>

      {selectedTag && (
        <div className={styles.filterInfo}>
          Mostrando {articles.length} artigo{articles.length !== 1 ? 's' : ''} com a tag <strong>{selectedTag}</strong>
        </div>
      )}

      <div className={styles.articlesGrid}>
        {articles.map((article) => (
          <BlogCard 
            key={article.id} 
            article={article} 
            onClick={handleArticleClick}
            onTagClick={handleTagFilter}
          />
        ))}
      </div>

      {articles.length === 0 && (
        <div className={styles.emptyState}>
          <p>Nenhum artigo encontrado com essa tag.</p>
          <button className={styles.clearFilterButton} onClick={clearFilter}>
            Ver todos os artigos
          </button>
        </div>
      )}

      {selectedArticle && (
        <ArticleModal 
          article={selectedArticle} 
          onClose={handleCloseModal}
          onTagClick={handleTagFilter}
        />
      )}
    </section>
  );
};

export default BlogSection;
