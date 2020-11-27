import { createGlobalStyle } from 'styled-components';

const Globalstyle = createGlobalStyle`

<<<<<<< HEAD:src/GlobalStyle.ts

=======
--DarkestWhite: #EBEAED;
--DarkerWhite: #F5F4F6;
--Ink: #170C3A;
--MosDarkestWhite: #DEDCE1;
>>>>>>> 6006d832ae6448af34107146df426f47c5fef005:src/GolbalStyle.ts

*{
    
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
<<<<<<< HEAD:src/GlobalStyle.ts

--DarkestWhite: #EBEAED;
--DarkerWhite: #F5F4F6;
--Ink: #170C3A;
--MostDarkestWhite: #DEDCE1;
=======
>>>>>>> 6006d832ae6448af34107146df426f47c5fef005:src/GolbalStyle.ts
  
  font-family: 'Source Sans Pro', sans-serif;  
}

body{
  width: 100vw;
  height: 100vh;
  display: flex;

align-items: center;
justify-content: center;
  
<<<<<<< HEAD:src/GlobalStyle.ts
  background-color: white;
=======
  background-color: var(--DarkerWhite);
>>>>>>> 6006d832ae6448af34107146df426f47c5fef005:src/GolbalStyle.ts
}

h1, h2, h3, h4, h5, h6{
  font-weight: 600;
  color: #170C3A; 
}

h1 {
  font-size:2.625rem;

}
h2{
  font-size:2.25rem;
  }
  
h3{
  font-size:1.875rem;
}

h4{
  font-size:1.625rem,
}

h5{
  font-size:1.5rem;
}

p {
  font-weight: normal;
  font-size:1.25rem;
}
`;

export default Globalstyle;
