// src/components/GamificationBar.jsx
import React from 'react';
import { FiAward } from 'react-icons/fi';

const styles = {
    container: {
        position: 'fixed',
        bottom: 0,
        left: 0,
        width: '98%',
        background: 'linear-gradient(135deg, rgba(10, 22, 40, 0.95) 0%, rgba(27, 38, 59, 0.95) 100%)',
        backdropFilter: 'blur(10px)',
        borderTop: '1px solid rgba(6, 182, 212, 0.3)',
        padding: '10px 20px',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        boxShadow: '0 -4px 30px rgba(6, 182, 212, 0.1)'
    },
    label: {
        fontSize: '0.8rem',
        color: '#94a3b8',
        whiteSpace: 'nowrap',
        display: 'flex',
        alignItems: 'center',
        gap: '8px'
    },
    barContainer: {
        flexGrow: 1,
        height: '8px',
        background: 'rgba(15, 30, 45, 0.6)',
        borderRadius: '4px',
        overflow: 'hidden',
        border: '1px solid rgba(6, 182, 212, 0.2)'
    },
    fill: (percent) => ({
        width: `${percent}%`,
        height: '100%',
        background: 'linear-gradient(90deg, #06b6d4, #22d3ee, #06b6d4)',
        backgroundSize: '200% 100%',
        animation: 'shimmer 3s ease infinite',
        transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: '0 0 15px rgba(6, 182, 212, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.2)'
    }),
    percentText: {
        color: '#22d3ee',
        fontWeight: 'bold',
        fontSize: '0.9rem',
        minWidth: '40px',
        textAlign: 'right',
        textShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
    }
};

const GamificationBar = ({ progress, unlockedCount, total }) => {
    let rank = "Visitante";
    if (progress > 25) rank = "Explorador";
    if (progress > 50) rank = "Recrutador";
    if (progress > 90) rank = "Stalker Profissional";
    if (progress === 100) rank = "Lenda";

    return (
        <>
            <style>{`
                @keyframes shimmer {
                    0%, 100% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                }
            `}</style>
            <div style={styles.container}>
                <div style={styles.label}>
                    <FiAward color="#06b6d4" />
                    <span>Rank: <strong style={{color: '#e0f2fe'}}>{rank}</strong></span>
                    <span style={{opacity: 0.5}}>({unlockedCount}/{total} itens)</span>
                </div>
                
                <div style={styles.barContainer}>
                    <div style={styles.fill(progress)} />
                </div>
                
                <div style={styles.percentText}>{progress}%</div>
            </div>
        </>
    );
};

export default GamificationBar;