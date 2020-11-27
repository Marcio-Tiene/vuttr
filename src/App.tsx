import React, { useState } from 'react';
import InputSubmitOnEnter from './components/InputSubmitOnEnter';
import Main from './components/Main';
import Title from './components/Title';
import { FiSearch } from 'react-icons/fi';
import CheckBox from './components/CheckBox';

function App() {
  const [searchText, setSearchText] = useState('');

  const onEnterPress = (event: React.KeyboardEvent<HTMLDivElement>): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      event.stopPropagation();
      console.log(searchText);
    }
  };
  return (
    <Main>
      <Title />

      <InputSubmitOnEnter
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setSearchText(event.target.value)
        }
        onKeyDown={onEnterPress}
        icon={<FiSearch size={20} color='var(--ink)' />}
        PlaceHolder='Search'
      />
      <CheckBox>Unchecked</CheckBox>
    </Main>
  );
}

export default App;
