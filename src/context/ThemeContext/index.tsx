import React, { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  DarkMode: false,
});

const SetDarkMode = createContext<null | React.Dispatch<
  React.SetStateAction<boolean>
>>(null);

const ThemeContextProvider: React.FC = ({ children }) => {
  const theme: boolean = localStorage.getItem('theme')
    ? JSON.parse(localStorage.getItem('theme') as string)
    : false;

  const [isDarkMode, setIsDarkMode] = useState(theme);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeContext.Provider value={{ DarkMode: isDarkMode }}>
      <SetDarkMode.Provider value={setIsDarkMode}>
        {children}
      </SetDarkMode.Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, SetDarkMode, ThemeContextProvider };
