// src/components/BlogSection.jsx
import React, { useState, useEffect } from 'react';
import BlogCard from './BlogCard';
import ArticleModal from './ArticleModal';
import { 
  getPublishedArticlesI18n, 
  getArticleBySlugI18n, 
  getArticlesByTagI18n, 
  getAllTagsI18n 
} from '../data/articles';
import { useLanguage } from '../i18n/LanguageContext';
import { FiBook, FiX } from 'react-icons/fi';
import styles from './BlogSection.module.css';

const BlogSection = ({ showCloseButton, onClose }) => {
  const { t, currentLanguage } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [selectedTag, setSelectedTag] = useState(null);
  const [articles, setArticles] = useState([]);
  const [allTags, setAllTags] = useState([]);

  // Atualiza artigos e tags quando o idioma muda
  useEffect(() => {
    const updatedArticles = getPublishedArticlesI18n(currentLanguage);
    const updatedTags = getAllTagsI18n(currentLanguage);
    setArticles(updatedArticles);
    setAllTags(updatedTags);
    setSelectedTag(null); // Limpa filtro de tag ao mudar idioma
  }, [currentLanguage]);

  const handleTagFilter = (tag) => {
    if (selectedTag === tag) {
      // Se já está filtrado por essa tag, remove o filtro
      setSelectedTag(null);
      setArticles(getPublishedArticlesI18n(currentLanguage));
      window.location.hash = '';
    } else {
      setSelectedTag(tag);
      setArticles(getArticlesByTagI18n(tag, currentLanguage));
      window.location.hash = `tag/${tag}`;
    }
  };

  const clearFilter = () => {
    setSelectedTag(null);
    setArticles(getPublishedArticlesI18n(currentLanguage));
    window.location.hash = '';
  };

  useEffect(() => {
    // Verificar se há um artigo na URL
    const hash = window.location.hash;
    if (hash.startsWith('#article/')) {
      const slug = hash.replace('#article/', '');
      const article = getArticleBySlugI18n(slug, currentLanguage);
      if (article) {
        setSelectedArticle(article);
      } else {
        // Se o artigo não existe no idioma atual, fecha o modal
        setSelectedArticle(null);
      }
    }
    // Verificar se há uma tag na URL
    if (hash.startsWith('#tag/')) {
      const tag = decodeURIComponent(hash.replace('#tag/', ''));
      handleTagFilter(tag);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentLanguage]);

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    window.location.hash = `article/${article.slug}`;
  };

  const handleCloseModal = () => {
    setSelectedArticle(null);
    window.location.hash = selectedTag ? `tag/${selectedTag}` : '';
  };

  return (
    <section className={styles.blogSection} id="blog">
      {showCloseButton && (
        <button className={styles.closeButton} onClick={onClose} aria-label={t.blog.close}>
          <FiX size={24} />
        </button>
      )}

      <div className={styles.header}>
        <div className={styles.titleContainer}>
          <FiBook className={styles.icon} size={32} />
          <h2 className={styles.sectionTitle}>{t.blog.title}</h2>
        </div>
        <p className={styles.sectionSubtitle}>
          {t.blog.subtitle}
        </p>
      </div>

      {/* Filtros de Tags */}
      <div className={styles.tagsFilter}>
        <span className={styles.filterLabel}>{t.blog.filterBy}</span>
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
            <FiX size={16} /> {t.blog.clearFilter}
          </button>
        )}
      </div>

      {selectedTag && (
        <div className={styles.filterInfo}>
          {currentLanguage === 'pt-BR' 
            ? `Mostrando ${articles.length} artigo${articles.length !== 1 ? 's' : ''} com a tag` 
            : `Showing ${articles.length} article${articles.length !== 1 ? 's' : ''} with tag`
          } <strong>{selectedTag}</strong>
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
          <p>
            {currentLanguage === 'pt-BR' 
              ? 'Nenhum artigo encontrado com essa tag.' 
              : 'No articles found with this tag.'}
          </p>
          <button className={styles.clearFilterButton} onClick={clearFilter}>
            {currentLanguage === 'pt-BR' ? 'Ver todos os artigos' : 'View all articles'}
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
