import React, { useContext, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { SetToolListContext } from '../../context/ToolListContext';
import { ITools } from '../../interfaces/ITools';
import GetTools from '../../services/GetTools';
import CheckBox from '../CheckBox';
import InputSubmitOnEnter from '../InputSubmitOnEnter';
import { SearchContainer } from './styles';

const SearchField: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const setTools = useContext(SetToolListContext) as React.Dispatch<
    React.SetStateAction<ITools[]>
  >;

  const { SearchTools, SearchToolsbyTags } = new GetTools();

  const onEnterPress = async (
    event: React.KeyboardEvent<HTMLDivElement>
  ): Promise<void> => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      if (isChecked) {
        const response = (await SearchToolsbyTags(searchText)) as ITools[];
        setTools(response);
      } else {
        const response = (await SearchTools(searchText)) as ITools[];
        setTools(response);
      }
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
