import type { FC } from 'react'
import Image from 'next/image'
import type { Props } from './types'

export const Icon: FC<Props> = ({ type, ...props }) => (
    <Image
        {...props}
        alt={type}
        src={`/icons/${type}.svg`}
        height={24}
        width={24}
    />
)