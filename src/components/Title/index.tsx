import React from 'react';
import Header from '../Header';
import { LogoContainer, LogoH1, LogoImg, Subtitle } from './styles';
import Logo from '../../assets/img/light-bulb.svg';

const Title: React.FC = () => {
  return (
    <Header>
      <LogoContainer>
        <LogoImg src={Logo} alt='' />
        <LogoH1> VUTTR</LogoH1>
      </LogoContainer>

      <Subtitle>Very Useful Tools To Remember</Subtitle>
    </Header>
  );
};

export default Title;
