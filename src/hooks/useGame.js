// src/hooks/useGame.js
import { useState, useEffect } from 'react';
import { portfolioData } from '../data/source';

const STORAGE_KEY = 'weber_portfolio_game_v1';

export const useGame = () => {
    const [unlockedIds, setUnlockedIds] = useState(() => {
        // Tenta carregar do localStorage ao iniciar
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    });

    const totalItems = portfolioData.length;
    const progress = Math.round((unlockedIds.length / totalItems) * 100);

    // Salva no localStorage sempre que mudar
    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(unlockedIds));
    }, [unlockedIds]);

    const unlockItems = (items) => {
        // Filtra apenas IDs novos que ainda não estão no array
        const newIds = items
            .map(item => item.id)
            .filter(id => !unlockedIds.includes(id));

        if (newIds.length > 0) {
            setUnlockedIds(prev => [...prev, ...newIds]);
            
            if (unlockedIds.length + newIds.length === totalItems) {
                console.log("🎉 Parabéns! Você é um expert!");
            }
        }
    };

    const unlockAll = () => {
        // Filtra apenas IDs novos que ainda não estão no array
        const allIds = portfolioData.map(item => item.id);
        const newIds = allIds.filter(id => !unlockedIds.includes(id));
        if (newIds.length > 0) {
            setUnlockedIds(allIds);
        }
    };

    // Reseta o progresso (útil para debug ou botão de reset)
    const resetProgress = () => {
        setUnlockedIds([]);
        localStorage.removeItem(STORAGE_KEY);
    };

    return {
        unlockedIds,
        progress,
        totalItems,
        unlockedCount: unlockedIds.length,
        unlockItems,
        unlockAll,
        resetProgress
    };
};