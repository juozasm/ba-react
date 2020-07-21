import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap');
    * {
        box-sizing: border-box;
    }
    button{
        border: 0;
        outline: 0;
        &:focus, &:hover{
            border: 0;
            outline: 0;
        }
    }
    body {
        font-family: 'Roboto', sans-serif;
    }
`

export default GlobalStyle
