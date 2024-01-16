import { createGlobalStyle } from "styled-components";


export const GlobalStyles = createGlobalStyle`

body {
    background: ${({ theme }) => theme.colors.body};
    color: ${({ theme }) => theme.colors.text};
    font - size: 1.15em;
    margin: 0;
}

h1,h2,h3{
    color:${({ theme }) => theme.colors.title};
}
`

export default GlobalStyles