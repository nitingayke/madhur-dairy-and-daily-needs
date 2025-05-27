import React, { createContext, useMemo, useState } from "react";
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("appTheme") || "light";
    });

    const toggleTheme = () => {
        localStorage.setItem("appTheme", (theme === 'light' ? 'dark' : 'light'));
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const value = useMemo(() => ({
        theme,
        toggleTheme,
    }), [theme]);

    return (
        <ThemeContext.Provider value={value} >
            {children}
        </ThemeContext.Provider>
    )
}