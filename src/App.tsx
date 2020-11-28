import React, { useContext } from 'react';
import Main from './components/Main';
import Title from './components/Title';

import ToolBar from './components/ToolBar';
import { ToolListContext } from './context/ToolListContext';

import { ITools } from './interfaces/ITools';

function App() {
  const Tools = useContext(ToolListContext);

  console.log(Tools.toolList);

  return (
    <Main>
      <Title />

      <ToolBar />

      {Tools.toolList.map((tool: ITools) => (
        <h1 key={`${tool.id}${tool.title} `}>{tool.title}</h1>
      ))}
    </Main>
  );
}

export default App;
