import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #365df0 0% 0% no-repeat padding-box;
  border-radius: 5px;
  width: 84px;
  height: 24px;
  cursor: pointer;
  outline: none;
  border: none;
  transition: linear 0.2s;
  text-align: center;
  font: normal normal 600 18px/24px Source Sans Pro;
  letter-spacing: 0.36px;
  color: #ffffff;
  transition: linear 0.2s;

  :hover {
    background: #2f55cc 0% 0% no-repeat padding-box;
  }

  :active {
    background: #244aa8 0% 0% no-repeat padding-box;
  }
`;
