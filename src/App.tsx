import React from 'react';
import Main from './components/Main';
import Title from './components/Title';

import ToolList from './components/ToolList';
import SearchFieldAnAddButton from './components/SearchFieldAnAddButton';
import NotificationBanner from './components/NotificationBanner';
import { CgClose } from 'react-icons/cg';

function App() {
  return (
    <Main>
      <Title />

      <SearchFieldAnAddButton />

      <ToolList />
    </Main>
  );
}

export default App;
