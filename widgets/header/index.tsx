import { FC } from 'react'
import Link from 'next/link'
import { Logo, Nav } from './ui'
import { CardButton } from '../../entities'
import { useRecoilValue } from 'recoil'
import { totalCountInCard } from './model'

export const Header: FC = () => {
    const totalCount = useRecoilValue(totalCountInCard)

    return (
        <Nav>
            <Link href="/">
                <Logo/>
            </Link>
            <Link href="/card">
                <CardButton count={totalCount}/>
            </Link>
        </Nav>
    )
}