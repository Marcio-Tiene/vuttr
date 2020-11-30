import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import AddToolFormModal from '../AddToolFormModal';
import { Button } from '../Button';
import SearchField from '../SearchField';
import { ToolBarContainer } from './styles';

const ToolBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ToolBarContainer>
      <SearchField />
      <Button onClick={() => setIsOpen(!isOpen)}>
        <GoPlus />
        add
      </Button>
      <AddToolFormModal open={isOpen}>
        <Button onClick={() => setIsOpen(!isOpen)}> dasdasdasdsa</Button>
      </AddToolFormModal>
    </ToolBarContainer>
  );
};

export default ToolBar;
