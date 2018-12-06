import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Nunito|Open+Sans');

  * {
    border: 1px solid aqua;
  }

  body {
    font-family: Nunito;
  }
`;

export default GlobalStyle;
