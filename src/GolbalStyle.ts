import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`

--DarkestWhite: #EBEAED;
--DarkerWhite: #F5F4F6;
--Yellow: #FFBB43;


*{
    
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  
  font-family: 'Source Sans Pro', sans-serif;
  


  
}

body{
  width: 100vw;
  height: 100vh;
  display: flex;

align-items: center;
justify-content: center;
  
  background-color:#6554C0;
  
 
  
  
  

}
h1, h2, h3, h4, h5, h6{
  font-weight: 600;
  color: #FFBB43;
  
  
}
`;

export default Globalstyle;
