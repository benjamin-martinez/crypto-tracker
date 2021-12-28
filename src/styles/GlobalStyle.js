import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Poppins;
    }
    body {
        background: ${(props) => props.theme.background};
    }
    ul {
        margin-top: 0px !important;
    }
    a {
        text-decoration: none;
        color: ${(props) => props.theme.color}
    }
`;
