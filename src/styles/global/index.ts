import { theme } from './../theme/index';
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: 'NanumSquareRound';
        src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }

    * {
        font-family: 'NanumSquareRound';
    }

    body {
        margin: 0;
    }

    input {
        outline: none;
    }

    input[type="checkbox"],
    input[type="radio"] {
    accent-color: ${theme.base['black']};
    cursor: pointer;
    }

    button {
        outline: none;
    }

    p {
        margin: 0;
    }
`;