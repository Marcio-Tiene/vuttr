import styled, { css } from 'styled-components';
import { Button } from '../Button';

interface IModal {
  show?: boolean;
  DarkMode?: boolean;
}

export const DeleteToolArticle = styled.article`
  display: flex;
  ${(p: IModal) =>
    !p.DarkMode &&
    css`
      filter: invert(1) hue-rotate(180deg);
    `};
  ${(p: IModal) =>
    !p.show &&
    css`
      display: flex;
    `};
  flex-direction: column;
  border-radius: 5px;
  gap: 4ch;
  padding: 3ch;
  width: 95vw;
  max-width: 600px;
  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;

  h3 {
    margin: 0;
  }
`;
export const DeleteTollHeader = styled.header`
  display: flex;
  gap: 1ch;
  align-items: center;
  flex-direction: row;
`;
export const DeleteToolButton = styled(Button)`
  width: fit-content;
  padding: 2ch;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4ch;
  align-self: flex-end;
  margin-bottom: 1ch;
`;
