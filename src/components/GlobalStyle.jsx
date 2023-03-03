import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
    body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #000000;
    }
    
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
            monospace;
    }

    h1,
    h2, 
    h3, 
    h4, 
    p {
        margin-top: 0px;
        margin-bottom: 0px;
    }

    ol,
    ul {
        margin-top: 0px;
        margin-bottom: 0px;
        padding-left: 0px;
    }

    img {
        display: block;
        max-width: 100%;
    }

    li {list-style: none;}
`;