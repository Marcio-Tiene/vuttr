import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import AddToolFormModal from '../AddToolFormModal';
import { Button } from '../Button';
import SearchField from '../SearchField';
import { SearchFieldAnAddButtonContainer } from './styles';

const SearchFieldAnAddButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SearchFieldAnAddButtonContainer>
      <SearchField />
      <Button onClick={() => setIsOpen(!isOpen)}>
        <GoPlus />
        add
      </Button>
      <AddToolFormModal open={isOpen} onClick={() => setIsOpen(!isOpen)} />
    </SearchFieldAnAddButtonContainer>
  );
};

export default SearchFieldAnAddButton;
