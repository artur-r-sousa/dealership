'use client'

import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background-color: #79baec;
    -webkit-font-smoothing: antialiased !important;
    height: 100%;
  }

  body, input {
    color: #ffffff;
    font-family: Kanit;
    font-weight: normal;
    font-size: 14px;
  }

  button {
    cursor: pointer;
  }

  button:focus {
    outline: none;
  }

  @media (max-width: 800px) {
    html, body, #root {
      overflow-x: hidden;
    }
  }

  @font-face {
    font-family: Kanit;
    src: url(${`""https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Micro+5+Charted&display=swap" rel="stylesheet""`});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: Kanit;
    src: url(${`""https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Micro+5+Charted&display=swap" rel="stylesheet""`});
    font-weight: 700;
    font-style: italic;
  }

  @font-face {
    font-family: Kanit;
    src: url(${`""https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Micro+5+Charted&display=swap" rel="stylesheet""`});
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: Kanit;
    src: url(${`""https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Micro+5+Charted&display=swap" rel="stylesheet""`});
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: Kanit;
    src: url(${`""https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&family=Micro+5+Charted&display=swap" rel="stylesheet""`});
    font-weight: 600;
    font-style: italic;
  }
`;

export default GlobalStyle;