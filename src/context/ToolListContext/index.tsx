import React, { createContext, useState } from 'react';
import {
  hasFormErrorInitialValue,
  loadingToolsReference,
} from '../../config/References';
import { IHasFormError, ITools } from '../../interfaces/ITools';

const ToolListContext = createContext({
  toolList: [loadingToolsReference],
  hasFormError: hasFormErrorInitialValue,
  searchText: '',
  isChecked: false,
});
const SetToolListContext = createContext<null | React.Dispatch<
  React.SetStateAction<ITools[]>
>>(null);
const SetHasFormErrorContext = createContext<null | React.Dispatch<
  React.SetStateAction<IHasFormError>
>>(null);
const SetSearchText = createContext<null | React.Dispatch<
  React.SetStateAction<string>
>>(null);
const SetIsChecked = createContext<null | React.Dispatch<
  React.SetStateAction<boolean>
>>(null);

const ToolListProvider: React.FC = ({ children }) => {
  const [hasFormError, setHasFormError] = useState<IHasFormError>(
    hasFormErrorInitialValue
  );
  const [toolList, setToolList] = useState<ITools[]>([
    { title: 'loading', tags: [''] },
  ] as ITools[]);

  const [searchText, setSearchtext] = useState('');

  const [isChecked, setIsChecked] = useState(false);

  return (
    <ToolListContext.Provider
      value={{ toolList, hasFormError, searchText, isChecked }}
    >
      <SetToolListContext.Provider value={setToolList}>
        <SetHasFormErrorContext.Provider value={setHasFormError}>
          <SetSearchText.Provider value={setSearchtext}>
            <SetIsChecked.Provider value={setIsChecked}>
              {children}
            </SetIsChecked.Provider>
          </SetSearchText.Provider>
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
  SetSearchText,
  SetIsChecked,
};
