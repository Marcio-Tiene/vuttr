import { Form as Unform } from '@unform/web';
import styled from 'styled-components';
import { Button } from '../Button';

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
  }
  input {
    background: #f5f4f6 0% 0% no-repeat padding-box;
    border: 1px solid #dedce1;
    border-radius: 5px;
    font: normal normal normal 20px/26px Source Sans Pro;
    letter-spacing: 0.4px;
    text-indent: 1ch;
    color: var(--Ink);
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
  margin-top: 15%;
  justify-self: flex-end;
  align-self: flex-end;

  @media (max-height: 1024px) {
    margin-top: 6vh;
  }
`;
