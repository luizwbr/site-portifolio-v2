// src/components/VictoryMenu.jsx
import React from 'react';
import { FiCode, FiCpu, FiUser, FiX } from 'react-icons/fi';
import styles from './VictoryMenu.module.css';
import { ITEM_TYPES } from '../data/source';

const VictoryMenu = ({ onCategorySelect, onClose }) => {
    return (
        <div className={styles.victoryContainer}>
            <button className={styles.closeButton} onClick={onClose} title="Fechar menu">
                <FiX />
            </button>
            <h3 className={styles.victoryTitle}>Menu</h3>
            <p className={styles.victoryText}>
                Acompanhe meu portfólio explorando rapidamente as categorias abaixo:
            </p>
            
            <div className={styles.buttonGrid}>
                <button 
                    className={styles.victoryBtn} 
                    onClick={() => onCategorySelect(ITEM_TYPES.PROJECT)}
                >
                    <FiCode /> Meus projetos
                </button>
                
                <button 
                    className={styles.victoryBtn} 
                    onClick={() => onCategorySelect(ITEM_TYPES.SKILL)}
                >
                    <FiCpu /> Minhas skills
                </button>
                
                <button 
                    className={styles.victoryBtn} 
                    onClick={() => onCategorySelect(ITEM_TYPES.BIO)}
                >
                    <FiUser /> Bio
                </button>
            </div>
        </div>
    );
};

export default VictoryMenu;