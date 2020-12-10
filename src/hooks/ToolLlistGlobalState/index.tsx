import React, { useContext } from 'react';
import {
  SetToolListContext,
  ToolListContext,
  SetHasFormErrorContext,
  SetSearchText,
  SetIsChecked,
} from '../../context/ToolListContext';
import { IHasFormError, IToolSLocalStorage } from '../../interfaces/ITools';

const ToolListGlobalState = () => {
  const { toolList, hasFormError, searchText, isChecked } = useContext(
    ToolListContext
  );
  const setToolList = useContext(SetToolListContext) as React.Dispatch<
    React.SetStateAction<IToolSLocalStorage[]>
  >;
  const setHasFormError = useContext(SetHasFormErrorContext) as React.Dispatch<
    React.SetStateAction<IHasFormError>
  >;
  const setSearchText = useContext(SetSearchText) as React.Dispatch<
    React.SetStateAction<string>
  >;
  const setIsChecked = useContext(SetIsChecked) as React.Dispatch<
    React.SetStateAction<boolean>
  >;

  return {
    toolList,
    setToolList,
    hasFormError,
    setHasFormError,
    searchText,
    setSearchText,
    isChecked,
    setIsChecked,
  };
};

export default ToolListGlobalState;
