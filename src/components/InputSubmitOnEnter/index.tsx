import React from 'react';

import { IconContainer, InputWrapper, StyledInput } from './styles';

interface InuptCustomProps {
  icon?: JSX.Element;
  PlaceHolder?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const InputSubmitOnEnter: React.FC<InuptCustomProps> = ({
  icon,
  PlaceHolder,
  onChange,
  onKeyDown,
  value,
}) => {
  return (
    <>
      <InputWrapper>
        <StyledInput
          placeholder={PlaceHolder}
          onKeyDown={onKeyDown}
          onChange={onChange}
          value={value}
        />
        <IconContainer>{icon}</IconContainer>
      </InputWrapper>
    </>
  );
};

export default InputSubmitOnEnter;
