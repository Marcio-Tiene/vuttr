import styled, { css } from 'styled-components';

interface IModal {
  show?: boolean;
  DarkMode?: boolean;
}

export const ModalBackground = styled.dialog`
  display: none;

  opacity: 0;

  place-items: center;

  min-width: 100vw;
  min-height: 100vh;
  background: #170c3ae6 0% 0% no-repeat padding-box;
  position: absolute;
  top: 0;
  left: 0;

  ${(p: IModal) =>
    p.show &&
    css`
      display: grid;
      opacity: 1;
    `}
  ${(p: IModal) =>
    p.DarkMode
      ? css`
          filter: invert(1) hue-rotate(180deg);
        `
      : css``}
`;

export const AddFormArticle = styled.article`
  ${(p: IModal) =>
    p.DarkMode
      ? css`
          filter: invert(1) hue-rotate(180deg);
        `
      : css``}
  display: none;
  ${(p: IModal) =>
    !p.show &&
    css`
      display: flex;
    `};
  flex-direction: column;
  width: 95vw;
  max-width: 600px;
  height: 95vh;
  max-height: 700px;
  margin: 10% 0;
  border-radius: 5px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 20px 25px #0000001a;

  @media (max-height: 900px) {
    margin: 5px;
    height: fit-content;
  }
`;

export const AddFormHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  h2 {
    display: flex;
    align-items: center;
  }
  span {
    padding-right: 1ch;
  }
`;
