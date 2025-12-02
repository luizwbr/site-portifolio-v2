// src/components/VictoryMenu.jsx
import React from 'react';
import { FiCode, FiCpu, FiUser } from 'react-icons/fi';
import styles from './VictoryMenu.module.css';
import { ITEM_TYPES } from '../data/source';

const VictoryMenu = ({ onCategorySelect }) => {
    return (
        <div className={styles.victoryContainer}>
            <h3 className={styles.victoryTitle}>🔓 Menu Desbloqueado!</h3>
            <p className={styles.victoryText}>
                🏆 Você conseguiu visualizar 100% do conteúdo!! <br/>
                Acompanhe meu portifólio explorando rapidamente as categorias abaixo:
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