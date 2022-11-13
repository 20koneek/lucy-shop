import type { FC } from 'react'
import Image from 'next/image'
import type { Props, SizeRecord } from './types'

const SizeStyle: SizeRecord = {
    s: {
        height: 8,
        width: 8,
    },
    m: {
        height: 24,
        width: 24,
    },
}
export const Icon: FC<Props> = ({ type, size = 'm', ...props }) => (
    <Image
        {...props}
        alt={type}
        src={`/icons/${type}.svg`}
        {...SizeStyle[size]}
    />
)