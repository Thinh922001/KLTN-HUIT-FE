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
    cursor: pointer;
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
