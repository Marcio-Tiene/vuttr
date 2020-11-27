import React from 'react';
import { GoPlus } from 'react-icons/go';
import { Button } from '../Button';
import SearchField from '../SearchField';
import { ToolBarContainer } from './styles';

const ToolBar = () => {
  return (
    <ToolBarContainer>
      <SearchField />
      <Button>
        <GoPlus />
        add
      </Button>
    </ToolBarContainer>
  );
};

export default ToolBar;
