import React, { useContext } from 'react';
import Main from './components/Main';
import Title from './components/Title';

import ToolList from './components/ToolList';
import SearchFieldAnAddButton from './components/SearchFieldAnAddButton';
import DarkThemeSwitcher from './components/DarkThemeSwitcher';
import Globalstyle from './GlobalStyle';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { DarkMode } = useContext(ThemeContext);
  return (
    <>
      <Main>
        <DarkThemeSwitcher />
        <Title />

        <SearchFieldAnAddButton />

        <ToolList />
      </Main>
      <Globalstyle DarkMode={DarkMode} />
    </>
  );
}

export default App;
