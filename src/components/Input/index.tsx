import React from 'react';

import { IconContainer, InputWrapper, StyledInput } from './styles';

interface InuptCustomProps {
  icon?: JSX.Element;
  PlaceHolder?: string;
}

const Input: React.FC<InuptCustomProps> = ({ icon, PlaceHolder }) => {
  return (
    <InputWrapper>
      <StyledInput placeholder={PlaceHolder} />
      <IconContainer>{icon}</IconContainer>
    </InputWrapper>
  );
};

export default Input;
