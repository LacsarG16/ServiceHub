import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        // Check local storage or system preference
        const saved = localStorage.getItem('theme');
        if (saved) return saved;
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    const [preset, setPreset] = useState(() => {
        const saved = localStorage.getItem('theme-preset');
        return saved || 'aurora';
    });

    const [showAurora, setShowAurora] = useState(() => {
        const saved = localStorage.getItem('show-aurora');
        return saved === null ? true : saved === 'true';
    });

    useEffect(() => {
        // Apply theme to document element
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.setAttribute('data-preset', preset);
        localStorage.setItem('theme-preset', preset);
    }, [preset]);

    useEffect(() => {
        localStorage.setItem('show-aurora', showAurora);
    }, [showAurora]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
    };

    const toggleAurora = () => {
        setShowAurora((prev) => !prev);
    };

    return (
        <ThemeContext.Provider value={{ theme, preset, showAurora, toggleTheme, setPreset, toggleAurora }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
