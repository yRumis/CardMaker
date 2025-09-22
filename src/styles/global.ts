

import { createGlobalStyle } from 'styled-components';  

export const GlobalStyles = createGlobalStyle`

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body, html {
    max-width: 100vw;
    overflow-x: hidden;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }


`