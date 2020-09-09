import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  @media (max-width: 530px) {
    html{
      font-size: 50%!important;
    }
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  html, body {
    height: 100vh;
    width: 100vw;
  }

  body {
    background: ${props => props.theme.colors.background};
    color: #fff;
    font: 400 1.6rem Roboto, sans-serif;
  }

  .t-shadow {
    text-shadow: 0 0 3px ${props => props.theme.colors.secondary};
  }

  .b-shadow {
    box-shadow: 0 0 3px ${props => props.theme.colors.secondary};
  }

  .svg-shadow {
    filter: drop-shadow(0 0 2px ${props => props.theme.colors.secondary});
  }

`;
