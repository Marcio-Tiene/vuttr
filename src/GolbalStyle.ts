import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`
*{
    
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  width: 100vw;
  height: 100vh;
  font-family: 'Source Sans Pro', sans-serif;

  
}

body{
  width: 100vw;
  height: 100vh;
  display:flex;
  
  align-items:center;
  justify-content: center;
  
  background: #6554C0 0% 0% no-repeat padding-box;
  color:#FCFCFD

}
h1, h2, h3, h4, h5, h6{
  font: normal normal 600 26px/32px Source Sans Pro;
  text-shadow:0.25rem 0.40rem 0.40rem #170C3A ;
}
`;

export default Globalstyle;
