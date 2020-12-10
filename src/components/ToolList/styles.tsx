import styled from 'styled-components';

export const ToolListContainer = styled.div`
  max-width: 95vw;
  margin-top: 10px;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 20px;
  @media (min-width: 800px) {
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
      width: 5px;
    }

    /* Track */
    ::-webkit-scrollbar-track {
      background: none;
    }

    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: var(--Ink);
      border-radius: 5px;
    }
  }
`;
