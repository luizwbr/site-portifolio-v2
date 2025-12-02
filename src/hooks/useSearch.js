// src/hooks/useSearch.js
import { useState, useMemo } from 'react';
import Fuse from 'fuse.js';
import { portfolioData } from '../data/source';

// Configuração do Fuse.js
const fuseOptions = {
    includeScore: true,
    threshold: 0.4, // 0.0 = exato, 1.0 = muito abrangente. 0.4 é um bom equilíbrio para "fuzzy"
    keys: [
        { name: 'title', weight: 0.7 },       // Título tem mais peso
        { name: 'type', weight: 0.8 }, 
        { name: 'description', weight: 0.5 }, // Descrição tem peso médio
        { name: 'tags', weight: 0.4 },        // Tags técnicas
        { name: 'keywords', weight: 0.3 }     // Palavras-chave ocultas
    ]
};

export const useSearch = (externalQuery, setExternalQuery) => {
    // Se não passar query externa, usa estado local (fallback)
    const [localQuery, setLocalQuery] = useState('');
    const query = externalQuery !== undefined ? externalQuery : localQuery;
    const setQuery = setExternalQuery || setLocalQuery;
    
    // Inicializa o Fuse apenas uma vez (performance)
    const fuse = useMemo(() => new Fuse(portfolioData, fuseOptions), []);

    // Executa a busca se houver query, senão retorna array vazio
    const results = useMemo(() => {
        if (!query || query.length < 2) return [];
        // Mapeia o resultado do Fuse para retornar apenas o objeto original
        return fuse.search(query).map(result => result.item);
    }, [query, fuse]);

    return {
        query,
        setQuery,
        results,
        hasResults: results.length > 0
    };
};