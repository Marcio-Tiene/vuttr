import React from 'react';
import Main from './components/Main';
import Title from './components/Title';

import ToolBar from './components/ToolBar';
import ToolList from './components/ToolList';

function App() {
  return (
    <Main>
      <Title />

      <ToolBar />

      <ToolList />
    </Main>
  );
}

export default App;
