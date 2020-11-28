import React, { createContext, useEffect, useState } from 'react';
import { toolsErrorReference } from '../../config/References';
import { ITools } from '../../interfaces/ITools';
import GetTools from '../../services/GetTools';

const ToolListContext = createContext({
  toolList: [toolsErrorReference],
});
const SetToolListContext = createContext<null | React.Dispatch<
  React.SetStateAction<ITools[]>
>>(null);

const ToolListProvider: React.FC = ({ children }) => {
  const [toolList, setToolList] = useState<ITools[]>([
    { title: 'loading' },
  ] as ITools[]);
  const { LoadAllTools } = new GetTools();

  useEffect(() => {
    (async () => {
      const response = (await LoadAllTools()) as ITools[];
      setToolList(response);
    })();
  }, [LoadAllTools]);

  return (
    <ToolListContext.Provider value={{ toolList }}>
      <SetToolListContext.Provider value={setToolList}>
        {children}
      </SetToolListContext.Provider>
    </ToolListContext.Provider>
  );
};

export { ToolListContext, ToolListProvider, SetToolListContext };
