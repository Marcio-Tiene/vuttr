import React, { useState } from 'react';
import { GoPlus } from 'react-icons/go';
import { hasFormErrorInitialValue } from '../../config/References';
import ToolListGlobalState from '../../hooks/ToolLlistGlobalState';
import AddToolFormModal from '../AddToolFormModal';
import { Button } from '../Button';
import SearchField from '../SearchField';
import { SearchFieldAnAddButtonContainer } from './styles';

const SearchFieldAnAddButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setHasFormError } = ToolListGlobalState();

  return (
    <SearchFieldAnAddButtonContainer>
      <SearchField />
      <Button onClick={() => setIsOpen(!isOpen)} style={{ marginRight: '8px' }}>
        <GoPlus />
        add
      </Button>
      <AddToolFormModal
        open={isOpen}
        onClick={() => {
          setIsOpen(!isOpen);
          setHasFormError(hasFormErrorInitialValue);
        }}
      />
    </SearchFieldAnAddButtonContainer>
  );
};

export default SearchFieldAnAddButton;
