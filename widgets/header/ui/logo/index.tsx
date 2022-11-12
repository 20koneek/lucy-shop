import type { FC } from 'react'
import Image from 'next/image'

export const Logo: FC = () => (
    <Image
        alt="logo"
        src="/logo.svg"
        width="143"
        height="30"
    />
)