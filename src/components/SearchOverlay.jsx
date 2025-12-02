// src/components/SearchOverlay.jsx
import React, { useEffect, useRef } from 'react';
import { FiSearch, FiX, FiExternalLink, FiCheckCircle } from 'react-icons/fi'; // Adicionei FiCheckCircle
import styles from './SearchOverlay.module.css';

// Recebemos novas props: onResultsFound e unlockedIds
const SearchOverlay = ({ 
    isOpen, 
    onClose, 
    onResultsFound, 
    unlockedIds,
    query,       // Novo
    setQuery,    // Novo
    results,     // Novo
    hasResults   // Novo
}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isOpen]);

    // O useEffect de notificar o jogo continua aqui
    useEffect(() => {
        if (hasResults) {
            const timer = setTimeout(() => {
                onResultsFound(results);
            }, 500);
            return () => clearTimeout(timer);
        }
    }, [results, hasResults, onResultsFound]);

    if (!isOpen) return null;

    return (
        <div className={styles.overlayBackdrop} onClick={onClose}>
            <div className={styles.searchContainer} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <FiX />
                </button>

                <div className={styles.inputWrapper}>
                    <FiSearch className={styles.searchIcon} />
                    <input
                        ref={inputRef}
                        type="text"
                        className={styles.searchInput}
                        placeholder="Pesquise..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>

                <div className={styles.resultsList}>
                    {hasResults ? (
                        results.map(item => {
                            // Verifica se este item específico já foi desbloqueado antes
                            const isUnlocked = unlockedIds.includes(item.id);

                            return (
                                <div key={item.id} className={styles.resultCard} style={{
                                    // Visual diferente se acabou de descobrir (opcional)
                                    borderLeftColor: isUnlocked ? '#8a4fff' : '#ffffff' 
                                }}>
                                    <div className={styles.cardHeader}>
                                        <span className={styles.typeBadge}>
                                            {item.type}
                                            {/* Ícone indicando que já foi coletado */}
                                            {isUnlocked && <FiCheckCircle style={{marginLeft: 8}} />}
                                        </span>
                                        {item.url && (
                                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                                                <FiExternalLink />
                                            </a>
                                        )}
                                    </div>
                                    <h3 className={styles.cardTitle}>{item.title}</h3>
                                    <p className={styles.cardDescription}>{item.description}</p>
                                    
                                    {item.tags && (
                                        <div className={styles.tagsRow}>
                                            {item.tags.map(tag => (
                                                <span key={tag} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        }
                        )
                    ) : query.length > 1 ? (
                        <p style={{ textAlign: 'center', color: 'var(--color-text-secondary)' }}>
                            Nenhum resultado encontrado para "{query}".
                        </p>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default SearchOverlay;