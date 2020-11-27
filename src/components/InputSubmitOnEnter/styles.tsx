import styled from 'styled-components';

export const InputWrapper = styled.div`
  padding-left: 1rem;
  position: relative;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0.125rem;
  left: 1.125rem;
  opacity: 0.7;
`;

export const StyledInput = styled.input`
  background: var(--DarkerWhite) 0% 0% no-repeat padding-box;
  text-indent: 1.35rem;

  height: 1.5rem;
  border: 1px solid var(--MostDarkestWhite);
  outline: none;
  border-radius: 5px;
  transition: linear 0.2s;

  &:focus {
    background: var(--MostDarkestWhite) 0% 0% no-repeat padding-box;
  }
`;
