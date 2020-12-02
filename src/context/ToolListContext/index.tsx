import React, { createContext, useState } from 'react';
import {
  hasFormErrorInitialValue,
  loadingToolsReference,
} from '../../config/References';
import { IHasFormError, ITools } from '../../interfaces/ITools';

const ToolListContext = createContext({
  toolList: [loadingToolsReference],
  hasFormError: hasFormErrorInitialValue,
});
const SetToolListContext = createContext<null | React.Dispatch<
  React.SetStateAction<ITools[]>
>>(null);
const SetHasFormErrorContext = createContext<null | React.Dispatch<
  React.SetStateAction<IHasFormError>
>>(null);

const ToolListProvider: React.FC = ({ children }) => {
  const [hasFormError, setHasFormError] = useState<IHasFormError>(
    hasFormErrorInitialValue
  );
  const [toolList, setToolList] = useState<ITools[]>([
    { title: 'loading', tags: [''] },
  ] as ITools[]);

  return (
    <ToolListContext.Provider value={{ toolList, hasFormError }}>
      <SetToolListContext.Provider value={setToolList}>
        <SetHasFormErrorContext.Provider value={setHasFormError}>
          {children}
        </SetHasFormErrorContext.Provider>
      </SetToolListContext.Provider>
    </ToolListContext.Provider>
  );
};

export {
  ToolListContext,
  ToolListProvider,
  SetToolListContext,
  SetHasFormErrorContext,
};
