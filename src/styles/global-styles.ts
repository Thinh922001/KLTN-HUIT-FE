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
  height: 100%;
}

html {
    font-size: 62.5%;
}

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.6rem;
    background-color: ${p => p.theme.background};
  }

  body.fontLoaded {
    font-family: 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-color: #EEEEEE;

    ::-webkit-scrollbar-track {
    border: 1px solid black;
    background-color: #F5F5F5;
}


::-webkit-scrollbar {
    width: 10px;
    background-color: #F5F5F5;
}


::-webkit-scrollbar-thumb {
    background-color: #000000;
}
      
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
