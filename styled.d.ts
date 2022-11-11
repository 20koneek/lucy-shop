import 'styled-components'

declare module 'styled-components' {
    export interface Colors {
        primary: string,
        secondary: string,
        contrast: string,
    }

    export interface ExtendColors extends Colors {
        alt: string
    }

    export interface DefaultTheme {
        background: Colors,
        colors: ExtendColors,
    }
}