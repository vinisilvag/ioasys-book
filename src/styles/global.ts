import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #ffffff;
    --black: #000000;
    --light-black: #333333;
    --text: #999999;
    --primary: #B22E6F;
    --caption: #AB2680;
  }

  body {
    background-color: var(--background);
    color: var(--text);
  }

  body,
  input,
  textarea,
  button {
    font: 400 1rem "Heebo", sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;
