import type { ImageProps } from 'next/image'

export type Icon = 'card'

export type Props = Omit<ImageProps, 'src' | 'alt' | 'width' | 'height'> & {
    type: Icon
}