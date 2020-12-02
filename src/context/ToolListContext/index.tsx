import React, { createContext, useState } from 'react';
import { loadingToolsReference } from '../../config/References';
import { ITools } from '../../interfaces/ITools';

const ToolListContext = createContext({
  toolList: [loadingToolsReference],
});
const SetToolListContext = createContext<null | React.Dispatch<
  React.SetStateAction<ITools[]>
>>(null);

const ToolListProvider: React.FC = ({ children }) => {
  const [toolList, setToolList] = useState<ITools[]>([
    { title: 'loading', tags: [''] },
  ] as ITools[]);

  return (
    <ToolListContext.Provider value={{ toolList }}>
      <SetToolListContext.Provider value={setToolList}>
        {children}
      </SetToolListContext.Provider>
    </ToolListContext.Provider>
  );
};

export { ToolListContext, ToolListProvider, SetToolListContext };
