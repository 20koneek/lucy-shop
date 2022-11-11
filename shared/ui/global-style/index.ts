import { createGlobalStyle, type DefaultTheme } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    color: ${({ theme }) => theme.colors.primary};
    background-color: ${({ theme }) => theme.background.primary};
    padding: 0;
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: Avenir, sans-serif;
    letter-spacing: 0;
  }
`

export const theme: DefaultTheme = {
    background: {
        primary: '#F5F5F5',
        secondary: '#E9E9E9',
        contrast: '#222222',
    },
    colors: {
        primary: '#000000',
        secondary: '#62636D',
        contrast: '#FFFFFF',
        alt: '#F97369',
    },
}
