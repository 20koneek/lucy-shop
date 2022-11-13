import 'styled-components'

declare module 'styled-components' {
    export interface Colors {
        primary: string,
        secondary: string,
        contrast: string,
        alt: string
    }

    export interface DefaultTheme {
        background: Colors,
        colors: Colors,
        pagination: {
            border: string,
        }
    }
}