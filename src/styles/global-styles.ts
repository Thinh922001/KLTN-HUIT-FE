import { createGlobalStyle } from 'styled-components';
import { StyleConstants } from './StyleConstants';
import reset from 'styled-reset';
/* istanbul ignore next */
export const GlobalStyle = createGlobalStyle`

${reset}
  /* other styles */


*,
::before,
::after {
    box-sizing: border-box;
}

html,body {
  width: 100%;
}

html {
    font-size: 62.5%;
}

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    background-color: ${p => p.theme.background};

    ::-webkit-scrollbar {
    width: 12px;
    height: 12px;
  }

  ::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #e0e0e0;
    border-radius: 10px;
    border: 2px solid #f9f9f9;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #d0d0d0; 
  }

 
  * {
    scrollbar-width: thin; 
    scrollbar-color: #e0e0e0 #f9f9f9; 
  }
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #f2f4f7;

   
}

 a {
    color: inherit;
    text-decoration: none;
}

button {
    border: none;
    outline: none;
    background: transparent;
    padding: 0;
}
a,
img,
button,
input,
textarea,
select {
    font-family: inherit;
    color: inherit;
    -webkit-tap-highlight-color: transparent;
    outline: none;
    border: none;
    padding: 0;
}

input {
    background: transparent;
}
`;
