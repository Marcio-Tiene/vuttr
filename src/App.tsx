import React from 'react';
import Input from './components/Input';
import Main from './components/Main';
import Title from './components/Title';
import { FiSearch } from 'react-icons/fi';

function App() {
  return (
    <Main>
      <Title />

      <Input
        icon={<FiSearch size={20} color='var(--ink)' />}
        PlaceHolder='Search'
      />
    </Main>
  );
}

export default App;
