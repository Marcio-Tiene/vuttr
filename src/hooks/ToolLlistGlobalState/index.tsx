import React, { useContext } from 'react';
import {
  SetToolListContext,
  ToolListContext,
  SetHasFormErrorContext,
} from '../../context/ToolListContext';
import { IHasFormError, ITools } from '../../interfaces/ITools';

const ToolListGlobalState = () => {
  const { toolList, hasFormError } = useContext(ToolListContext);
  const setToolList = useContext(SetToolListContext) as React.Dispatch<
    React.SetStateAction<ITools[]>
  >;
  const setHasFormError = useContext(SetHasFormErrorContext) as React.Dispatch<
    React.SetStateAction<IHasFormError>
  >;

  return { toolList, setToolList, hasFormError, setHasFormError };
};

export default ToolListGlobalState;
