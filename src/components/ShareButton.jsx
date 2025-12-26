// src/components/ShareButton.jsx
import React, { useState } from 'react';
import { FiShare2, FiTwitter, FiLinkedin, FiFacebook, FiLink, FiCheck } from 'react-icons/fi';
import styles from './ShareButton.module.css';

const ShareButton = ({ article, url }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const shareUrl = url || window.location.href;
  const shareText = `${article.title} - ${article.excerpt}`;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`
  };

  return (
    <div className={styles.shareContainer}>
      <button 
        className={styles.shareButton}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Compartilhar artigo"
      >
        <FiShare2 size={18} />
        Compartilhar
      </button>

      {isOpen && (
        <div className={styles.shareMenu}>
          <a
            href={shareLinks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareOption}
            title="Compartilhar no Twitter"
          >
            <FiTwitter size={18} />
            Twitter
          </a>
          
          <a
            href={shareLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareOption}
            title="Compartilhar no LinkedIn"
          >
            <FiLinkedin size={18} />
            LinkedIn
          </a>
          
          <a
            href={shareLinks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.shareOption}
            title="Compartilhar no Facebook"
          >
            <FiFacebook size={18} />
            Facebook
          </a>
          
          <button
            onClick={handleCopyLink}
            className={styles.shareOption}
            title="Copiar link"
          >
            {copied ? <FiCheck size={18} /> : <FiLink size={18} />}
            {copied ? 'Copiado!' : 'Copiar link'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ShareButton;
