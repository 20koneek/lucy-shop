import type { FC } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../shared/ui'

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Component {...pageProps} />
    </ThemeProvider>
)

export default App
