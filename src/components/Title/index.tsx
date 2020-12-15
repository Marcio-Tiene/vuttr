import React, { useContext } from 'react';
import Header from '../Header';
import { LogoContainer, LogoH1, LogoImg, Subtitle } from './styles';
import Logo from '../../assets/img/light-bulb.svg';
import { ThemeContext } from '../../context/ThemeContext';

const Title: React.FC = () => {
  const { DarkMode } = useContext(ThemeContext);
  return (
    <Header>
      <LogoContainer>
        <LogoImg src={Logo} alt='' DarkMode={DarkMode} />
        <LogoH1> VUTTR</LogoH1>
      </LogoContainer>

      <Subtitle>Very Useful Tools To Remember</Subtitle>
    </Header>
  );
};

export default Title;
