import styled from 'styled-components';

export const InputWrapper = styled.div`
  position: relative;
`;

export const IconContainer = styled.div`
  position: absolute;
  top: 0.125rem;
  left: 0.125rem;
  opacity: 0.5;
`;

export const StyledInput = styled.input`
  text-indent: 1.25rem;
  height: 1.5rem;

  :focus {
    outline-color: var(--Ink);
  }
`;
