import styled from 'styled-components';

const Main = styled.main`
  width: 95vw;
  max-width: 900px;
  height: 90vh;
  margin-top: 10vh;

  display: flex;
  flex-direction: column;
  scrollbar-width: none;

  overflow-y: auto;
  overflow-x: none;
  ::-webkit-scrollbar {
    width: 0px;
  }

  @media (max-width: 800px) {
    height: 100vh;
    margin-top: 0;
  }
`;

export default Main;
