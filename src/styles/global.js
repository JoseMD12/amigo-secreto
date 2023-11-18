import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        max-width: 100vw;
        max-height: 100vh;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #FF5539;
        overflow-x: hidden;
        overflow-y: hidden;
    }
    `;

export default GlobalStyle;
