import React, { useContext } from 'react';
import {
  SetToolListContext,
  ToolListContext,
} from '../../context/ToolListContext';
import { ITools } from '../../interfaces/ITools';

const ToolListGlobalState = () => {
  const { toolList } = useContext(ToolListContext);
  const setToolList = useContext(SetToolListContext) as React.Dispatch<
    React.SetStateAction<ITools[]>
  >;

  return { toolList, setToolList };
};

export default ToolListGlobalState;
