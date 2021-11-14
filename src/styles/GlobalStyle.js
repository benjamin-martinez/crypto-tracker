import { createGlobalStyle } from "styled-components"
import { themes } from "./colors"

export const GlobalStyle = createGlobalStyle`
    * {
        font-family: Poppins;
    }
    body {
        background: ${themes.dark.background};
    }

    ul {
        margin-top: 0px !important;
      }

      a {
          text-decoration: none;
          color: ${themes.dark.color}
      }
`