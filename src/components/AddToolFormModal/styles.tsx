import styled, { css } from 'styled-components';

interface IModal {
  show?: boolean;
}

export const ModalBackground = styled.div`
  display: grid;

  opacity: 0;
  place-items: center;

  min-width: 100vw;
  min-height: 100vh;
  background: #170c3ae6 0% 0% no-repeat padding-box;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1000;
  transition: opacity 0.3s, z-index 1s;

  ${(p: IModal) =>
    !p.show &&
    css`
      opacity: 1;

      z-index: 100;
      transition: opacity 0.3s, z-index 0s;
    `};
`;
