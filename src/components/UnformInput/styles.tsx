import styled from 'styled-components';
export interface MyUnformProps {
  hasError?: boolean;
}

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  input {
    color: ${(p: MyUnformProps) => (p.hasError ? '#F95E5A' : 'var(--Ink)')};
    background: ${(p: MyUnformProps) => (p.hasError ? '#FEEFEE' : '#F5F4F6')} 0%
      0% no-repeat padding-box;
    border: 1px solid
      ${(p: MyUnformProps) => (p.hasError ? '#F95E5A' : '#EBEAED')};
    border-radius: 5px;
  }
`;
