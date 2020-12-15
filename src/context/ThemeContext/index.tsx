import React, { createContext, useState } from 'react';

const ThemeContext = createContext({
  DarkMode: false,
});

const SetDarkMode = createContext<null | React.Dispatch<
  React.SetStateAction<boolean>
>>(null);

const ThemeContextProvider: React.FC = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ThemeContext.Provider value={{ DarkMode: isDarkMode }}>
      <SetDarkMode.Provider value={setIsDarkMode}>
        {children}
      </SetDarkMode.Provider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, SetDarkMode, ThemeContextProvider };
