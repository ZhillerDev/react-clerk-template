// src/context/theme-context.tsx
import {createContext, useContext, useState} from 'react';
import {ConfigProvider, theme} from 'antd';
import * as React from "react";

type ThemeContextType = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => {
  },
});

export function ThemeProvider({children}: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(() => {
    // 从 localStorage 读取持久化状态
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? savedTheme === 'dark' : false;
  });

  const toggleTheme = () => {
    setIsDark((prev) => {
      const newTheme = !prev;
      localStorage.setItem('theme', newTheme ? 'dark' : 'light');
      return newTheme;
    });
  };

  return (
      <ThemeContext.Provider value={{isDark, toggleTheme}}>
        <ConfigProvider theme={{algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm}}>
          {children}
        </ConfigProvider>
      </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);