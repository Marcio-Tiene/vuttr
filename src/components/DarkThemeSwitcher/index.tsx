import React, { useContext } from 'react';
import { SetDarkMode } from '../../context/ThemeContext';
import SwitchButton from '../SwitchButton';
import { DarkThemeSwitcherContainer } from './styles';

const DarkThemeSwitcher: React.FC = () => {
  const setIsDarkMode = useContext(SetDarkMode) as React.Dispatch<
    React.SetStateAction<boolean>
  >;
  return (
    <DarkThemeSwitcherContainer>
      <h4>Dark mode</h4>
      <SwitchButton onClick={() => setIsDarkMode((prevState) => !prevState)} />
    </DarkThemeSwitcherContainer>
  );
};

export default DarkThemeSwitcher;
