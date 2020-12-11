import styled from 'styled-components';

export const LogoImg = styled.img`
  height: 64px;

  transform: translateX(-7.5px);

  @media (max-width: 800px) {
    width: 200px;
    transform: translateX(-18px);
    margin-top: 10vh;
  }
`;

export const Subtitle = styled.h2`
  /* padding-left: 16px; */
`;
