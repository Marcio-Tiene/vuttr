import styled from 'styled-components';

export const LogoImg = styled.img`
  filter: invert(1) hue-rotate(180deg);
  height: 64px;

  @media (max-width: 800px) {
    margin-top: 10vh;
  }
`;

export const Subtitle = styled.h2``;

export const LogoContainer = styled.div`
  display: flex;
`;
export const LogoH1 = styled.h1`
  font-size: 64px;
`;
