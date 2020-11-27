import React, { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import CheckBox from '../CheckBox';
import InputSubmitOnEnter from '../InputSubmitOnEnter';
import { SearchContainer } from './styles';

const SearchField: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const onEnterPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      console.log(searchText, isChecked);
    }
  };
  return (
    <SearchContainer>
      <InputSubmitOnEnter
        value={searchText}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText(event.target.value)
        }
        onKeyDown={onEnterPress}
        icon={<AiOutlineSearch size={20} color='var(--Ink)' />}
        PlaceHolder='Search'
      />
      <CheckBox
        checked={isChecked}
        onChange={() => (isChecked ? setIsChecked(false) : setIsChecked(true))}
      >
        search in tags only
      </CheckBox>
    </SearchContainer>
  );
};

export default SearchField;
