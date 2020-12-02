import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
