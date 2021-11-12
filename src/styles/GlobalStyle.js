import { createGlobalStyle } from "styled-components"
import { themes } from "./colors"

export const GlobalStyle = createGlobalStyle`
    body {
        background: ${themes.light.background};
        @media (prefers-color-scheme: dark) {
            background: ${themes.dark.background}
        }
    }
`