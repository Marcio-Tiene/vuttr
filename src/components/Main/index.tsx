import styled from 'styled-components';

const Main = styled.main`
  width: 95vw;
  max-width: 900px;
  height: 90vh;
  margin-top: 10vh;

  display: flex;
  flex-direction: column;
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
  @media (max-width: 800px) {
    height: 100vh;
    margin-top: 0;
  }
`;

export default Main;
