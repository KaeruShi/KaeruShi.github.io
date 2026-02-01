import React, { createContext, useCallback, useEffect, useState } from "react";

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
  setDarkMode: (d: boolean) => void;
};

export const AppTheme = createContext<ThemeContextType>({
  isDarkMode: true,
  toggleTheme: () => {},
  setDarkMode: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const applyTheme = useCallback((isDark: boolean) => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, []);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      const dark = saved === "dark";
      setIsDarkMode(dark);
      applyTheme(dark);
    } else {
      applyTheme(true);
    }
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    setIsDarkMode((s) => {
      const next = !s;
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  return (
    <AppTheme.Provider
      value={{ isDarkMode, toggleTheme, setDarkMode: setIsDarkMode }}>
      {children}
    </AppTheme.Provider>
  );
};
