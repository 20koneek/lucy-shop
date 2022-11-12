import { FC } from 'react'
import Link from 'next/link'
import { Logo, Nav } from './ui'
import { CardButton } from '../../entities'

export const Header: FC = () => (
    <Nav>
        <Link href="/">
            <Logo/>
        </Link>
        <Link href="/card">
            <CardButton count={13}/>
        </Link>
    </Nav>
)