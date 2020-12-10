import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import ToolListGlobalState from '../../hooks/ToolLlistGlobalState';
import { ITools } from '../../interfaces/ITools';
import GetTools from '../../services/ToolsRepository';
import CheckBox from '../CheckBox';
import InputSubmitOnEnter from '../InputSubmitOnEnter';
import { SearchContainer } from './styles';

const SearchField: React.FC = () => {
  const {
    setToolList,
    searchText,
    setSearchText,
    isChecked,
    setIsChecked,
  } = ToolListGlobalState();

  const checkeBoxOnChange = () =>
    isChecked ? setIsChecked(false) : setIsChecked(true);

  const inputOnChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchText(event.target.value);

  const { SearchTools, SearchToolsbyTags } = new GetTools();

  const onEnterPress = async (
    event: React.KeyboardEvent<HTMLDivElement>
  ): Promise<void> => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      if (isChecked) {
        const response = (await SearchToolsbyTags(searchText)) as ITools[];
        setToolList(response);
      } else {
        const response = (await SearchTools(searchText)) as ITools[];
        setToolList(response);
      }
    }
  };
  return (
    <SearchContainer>
      <InputSubmitOnEnter
        value={searchText}
        onChange={inputOnChange}
        onKeyDown={onEnterPress}
        icon={<AiOutlineSearch size={20} color='var(--Ink)' />}
        PlaceHolder='Search'
      />
      <CheckBox checked={isChecked} onChange={checkeBoxOnChange}>
        search in tags only
      </CheckBox>
    </SearchContainer>
  );
};

export default SearchField;
