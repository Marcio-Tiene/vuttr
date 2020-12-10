import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  width: fit-content;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 2px;
    align-items: flex-start;
  }
`;
