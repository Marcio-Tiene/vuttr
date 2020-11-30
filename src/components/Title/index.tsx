import React from 'react';
import Header from '../Header';
import { LogoImg, Subtitle } from './styles';
import Logo from '../../assets/img/logo.svg';

const Title: React.FC = () => {
  return (
    <Header>
      <LogoImg src={Logo} alt='' />
      <Subtitle>Very Useful Things To Remember</Subtitle>
    </Header>
  );
};

export default Title;
