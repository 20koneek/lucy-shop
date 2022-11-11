import { Colors } from 'styled-components'

export type Size = 'xs' | 's' | 'm' | 'l' | 'xl'
export type Weight = 'lighter' | 'normal' | 'bold'

export type Props = Partial<{
    type: keyof Colors
    italic: boolean
    weight: Weight
    size: Size
}>