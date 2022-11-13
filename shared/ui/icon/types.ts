import type { ImageProps } from 'next/image'

type Size = 's' | 'm'

export type SizeRecord = Record<Size,
    {
        width: number;
        height: number
    }>

export type Icon = 'card' | 'left' | 'right' | 'double-left' | 'double-right'

export type Props = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
    type: Icon
    size?: Size
}