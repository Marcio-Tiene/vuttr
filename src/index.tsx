import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';

import { ToolListProvider } from './context/ToolListContext';
import { ThemeContextProvider } from './context/ThemeContext';

ReactDOM.render(
  <ThemeContextProvider>
    <ToolListProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ToolListProvider>
  </ThemeContextProvider>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
