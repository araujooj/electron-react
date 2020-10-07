import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #242331;
    color: #f5f5f5;
    -webkit-font-smoothing: antialiased !important
  }
  body, input, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

   #root {
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 25px;
  }
  
  `;
