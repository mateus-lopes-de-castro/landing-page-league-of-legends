import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
    }

    html, body {
        font-size: 100%;
        position: relative;
        height: 100%;
    }

    body {
        font-family: "Rowdies", cursive;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        background-color: #000;
        color: #fff;
        overflow: hidden;
    }
`