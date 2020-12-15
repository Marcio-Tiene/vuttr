import styled, { css } from 'styled-components';
import { ITheme } from '../../interfaces/ITheme';

export const LogoImg = styled.img`
  ${(p: ITheme) =>
    p.DarkMode
      ? css`
          filter: invert(1) hue-rotate(180deg);
        `
      : css``}
  height: 64px;
`;

export const Subtitle = styled.h2``;

export const LogoContainer = styled.div`
  @media (max-width: 800px) {
    margin-top: 10vh;
  }
  display: flex;
`;
export const LogoH1 = styled.h1`
  font-size: 64px;
  line-height: 64px;
`;
