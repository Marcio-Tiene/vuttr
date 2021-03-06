import React from 'react';
import Main from './components/Main';
import Title from './components/Title';

import ToolList from './components/ToolList';
import SearchFieldAnAddButton from './components/SearchFieldAnAddButton';

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
