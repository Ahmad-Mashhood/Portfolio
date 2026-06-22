import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved;
    return "system";
  });

  const [resolvedTheme, setResolvedTheme] = useState(() => {
    if (theme !== "system") return theme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function applyTheme(t) {
      root.classList.remove("light", "dark");
      if (t === "system") {
        const systemTheme = mediaQuery.matches ? "dark" : "light";
        root.classList.add(systemTheme);
        setResolvedTheme(systemTheme);
      } else {
        root.classList.add(t);
        setResolvedTheme(t);
      }
    }

    applyTheme(theme);
    localStorage.setItem("theme", theme);

    const listener = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
