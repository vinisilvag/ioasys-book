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
    --border: rgba(51, 51, 51, 0.2);
    --warning: #FA4462;
    --text: #999999;
    --primary: #B22E6F;
    --caption: #AB2680;
    --modal-background: rgba(0, 0, 0, 0.4);
  }

  body {
    height: 100%;
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

  ::-webkit-scrollbar {
    width: 18px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: white;
  }

  ::-webkit-scrollbar-thumb {
    background-color: var(--caption);
    border-radius: 10px;
    border: 5px solid white;
  }
`;
