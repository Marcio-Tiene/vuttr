import React from 'react';
import AddToolFormModal from './components/AddToolFormModal';
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
      {/* <AddToolFormModal open={true}></AddToolFormModal>S */}
    </Main>
  );
}

export default App;
