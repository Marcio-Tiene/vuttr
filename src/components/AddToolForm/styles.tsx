import { Form as Unform } from '@unform/web';
import styled from 'styled-components';
import { Button } from '../Button';

interface MyInputProps {
  hasError?: boolean;
}

export const Form = styled(Unform)`
  display: flex;
  padding-left: 5%;
  justify-content: space-between;
  flex-direction: column;
  width: 95%;
  height: 70%;

  label {
    text-align: left;
    font: normal normal 600 20px/26px Source Sans Pro;
    letter-spacing: 0.4px;
    color: var(--Ink);
    padding-bottom: 21px;
    span {
      color: var(--Ink);
    }

    @media (max-height: 900px) {
      padding-bottom: 5px;
    }
  }
  input {
    font: normal normal normal 20px/26px Source Sans Pro;
    letter-spacing: 0.4px;
    text-indent: 1ch;

    transition: linear 0.2s;
    outline: none;

    :focus,
    :hover {
      background: #ebeaed 0% 0% no-repeat padding-box;
    }
  }

  textarea {
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 1px solid #ebeaed;
    border-radius: 5px;
    height: 180px;
    resize: none;
    color: var(--Ink);
    font: normal normal normal 20px/26px Source Sans Pro;
    text-indent: 1ch;
    letter-spacing: 0.4px;
    outline: none;
    transition: linear 0.2s;
    :focus,
    :hover {
      background: #ebeaed 0% 0% no-repeat padding-box;
    }
  }
`;

export const SubmitButton = styled(Button)`
  margin-top: 10%;
  justify-self: flex-end;
  align-self: flex-end;

  @media (max-height: 900px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const ErrorMsg = styled.p`
  font-size: 0.85rem;
  color: red;
  align-self: flex-end;
  visibility: ${(p: MyInputProps) => (p.hasError ? 'visible' : 'hidden')};
`;
