import type { FC } from 'react'
import { RecoilRoot } from 'recoil'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { GoogleAnalytics } from 'nextjs-google-analytics'
import { GlobalStyle, theme } from '../shared/ui'
import { Header } from '../widgets'
import { initializeRecoilState } from '../shared/model'

const App: FC<AppProps> = ({ Component, pageProps }) => (
    <ThemeProvider theme={theme}>
        <RecoilRoot initializeState={initializeRecoilState}>
            <Header/>
            <GlobalStyle/>
            <GoogleAnalytics trackPageViews />
            <Component {...pageProps} />
        </RecoilRoot>
    </ThemeProvider>
)

export default App
